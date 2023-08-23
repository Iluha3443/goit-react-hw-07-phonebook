import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact } from "./contacts-api";

export const contactSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null
        },
        filter: ""
    },
    reducers: {
        handleSubmit(state, actions) {
            state.contacts.items.push({
                id: nanoid(),
                name: actions.payload.name,
                number: actions.payload.number
            })
        },
        deleteNumber(state, actions) {
            state.contacts.items = state.contacts.items.filter(contact => contact.id !== actions.payload)
        },
        filteredContacts(state, actions) {
            state.filter = actions.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.contacts.isLoading = true;
                state.contacts.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = action.error;
            })
             .addMatcher(
                (action) => action.type === deleteContact.pending.type,
                (state) => {
                    state.contacts.isLoading = true;
                    state.contacts.error = null;
                }
            )
            .addMatcher(
                (action) => action.type === deleteContact.fulfilled.type,
                (state, action) => {
                    state.contacts.isLoading = false;
                    state.contacts.items = action.payload;
                }
            )
            .addMatcher(
                (action) => action.type === deleteContact.rejected.type,
                (state, action) => {
                    state.contacts.isLoading = false;
                    state.contacts.error = action.error;
                }
            );
    }
});

export const { handleSubmit, deleteNumber, filteredContacts } = contactSlice.actions;
  