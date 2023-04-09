import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = false;
      state.items = payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
      // state.items = [...state.items, payload];
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(({ id }) => id !== payload.id);
      // const index = state.items.findIndex(
      //   contact => contact.id === payload.id
      // );
      // state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  }
});

export const contactsReducer = contactsSlice.reducer;
