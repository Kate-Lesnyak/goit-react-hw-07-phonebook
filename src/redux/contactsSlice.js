// import { createSlice } from "@reduxjs/toolkit";
// // import { nanoid } from "nanoid";
// // import { persistReducer } from "redux-persist";
// // import storage from "redux-persist/lib/storage";

// const contactsInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.items.push(action.payload);
//       },

//       prepare({ name, number }) {
//         return {
//           payload: {
//             // id: nanoid(),
//             name,
//             number,
//           },
//         };
//       },
//     },

//     deleteContact(state, action) {
//       state.items = state.items.filter(({ id }) => id !== action.payload);
//     },
//   }
// });

// export const { addContact, deleteContact } = contactsSlice.actions;

// export const getContacts = state => state.contacts.items;

// // const persistConfig = {
// //   key: 'contacts',
// //   storage,
// // };

// // export const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer);


