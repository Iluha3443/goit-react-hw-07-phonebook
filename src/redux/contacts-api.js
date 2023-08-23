import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


const BASE_URL = `https://64e621f209e64530d17fa2cc.mockapi.io/contacts/`;

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async () => {
        const res = await axios.get(`${BASE_URL}/contacts`);
        return res.data
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id) => {
         await axios.delete(`${BASE_URL}/contacts/${id}`);
    }
)

// export const addContact = createAsyncThunk(
//     "contacts/addContact",
//     async({ id: nanoid(), name: nameContact, number: numberTel }) => {
//      const response = await axios.post(`${BASE_URL}/contacts`)
//     }
    
// ) 

