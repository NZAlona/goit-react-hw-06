import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push({
          id: nanoid(),
          name: action.payload.name,
          number: action.payload.number,
        });
      },
    },
    deleteContact: {
      reducer(state, action) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      },
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
export const selectContacts = state => state.contacts.items;
