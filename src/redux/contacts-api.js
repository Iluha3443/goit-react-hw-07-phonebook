import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { deleteNumber, handleSubmit } from './contactsSlice';

const BASE_URL = `https://64e621f209e64530d17fa2cc.mockapi.io/contacts/`;

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async () => {
        const res = await axios.get(`${BASE_URL}/contacts`);
        const data = res.data;
        return data
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, {dispatch}) => {
         await axios.delete(`${BASE_URL}/contacts/${id}`);
        dispatch(deleteNumber(id))
    }
)

export const addNewContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, { dispatch }) => {
        const response = await axios.post(`${BASE_URL}/contacts`, contact)
        const data = response.data;
        dispatch(handleSubmit(data))
    }
    
) 

