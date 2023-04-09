// todo 1 вариант actions, reducers
// import { fetchContactsRequest, fetchContactsSuccess, fetchContactsError, addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError } from "./actions";

// import axios from "axios";

// axios.defaults.baseURL = 'https://642b3205208dfe2547142a12.mockapi.io/api/v1';

// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());

//   // axios
//   //   .get('/contacts')
//   //   .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//   //   .catch(error => dispatch(fetchContactsError(error)));

//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error.message));
//   }
// }

// export const addContact = ({ name, number }) => async dispatch => {
//   const contact = {
//     name,
//     number,
//   };

//   dispatch(addContactRequest());

//   // axios
//   //   .post('./contacts', contact)
//   //   .then(({ data }) => dispatch(addContactSuccess(data)))
//   //   .catch(error => dispatch(addContactError(error)));

//   try {
//     const { data } = await axios.post('/contacts', contact);
//     dispatch(addContactSuccess(data));
//   } catch (error) {
//     dispatch(addContactError(error));
//   }
// };

// export const deleteContact = contactId => async dispatch => {
//   dispatch(deleteContactRequest());

//   // axios
//   //   .delete(`/contacts/${contactId}`)
//   //   .then(() => dispatch(deleteContactSuccess(contactId)))
//   //   .catch(error => dispatch(deleteContactError(error)));

//   try {
//     await axios.delete(`/contacts/${contactId}`);
//     dispatch(deleteContactSuccess(contactId));
//   } catch (error) {
//     dispatch(deleteContactError(error));
//   }
// }

// todo 2 вариант slice
import axios from 'axios';
import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://642b3205208dfe2547142a12.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    const contact = {
      name,
      number,
    };

    try {
      const { data } = await axios.post('/contacts', contact);
      Notiflix.Notify.success(`${contact.name} is added to the phone book`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      Notiflix.Notify.info('The contact removed from phone book');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
