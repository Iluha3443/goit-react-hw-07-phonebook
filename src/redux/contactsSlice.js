import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact,addNewContact } from "./contacts-api";


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
            state.contacts.items.push(actions.payload)
        },
        deleteNumber(state, actions) {
            state.contacts.items = state.contacts.items.filter(contact => contact.id !== actions.payload)
        },
        filteredContacts(state, actions) {
            state.filter = actions.payload
        },
    },
    extraReducers: {
        [fetchContacts.pending]: (state, actions) => {
            state.contacts.isLoading = true;
        },
        [fetchContacts.fulfilled]: (state, actions) => {
            state.contacts.isLoading = false;
            state.contacts.items = actions.payload;
        },
         [fetchContacts.rejected]: (state, actions) => {
             state.contacts.isLoading = false;
             state.contacts.error = actions.payload;
        },
         [deleteContact.pending]: (state, actions) => {
            state.contacts.isLoading = true;
        },
          [deleteContact.fulfilled]: (state, actions) => {
            state.contacts.isLoading = false;
        },
        [deleteContact.rejected]: (state, actions) => {
            state.contacts.isLoading = false;
        },
         [addNewContact.pending]: (state, actions) => {
            state.contacts.isLoading = true;
        },
         [addNewContact.fulfilled]: (state, actions) => {
            state.contacts.isLoading = false;
        },
         [addNewContact.rejected]: (state, actions) => {
            state.contacts.isLoading = false;
        },
    }
});

export const { handleSubmit, deleteNumber, filteredContacts } = contactSlice.actions;
