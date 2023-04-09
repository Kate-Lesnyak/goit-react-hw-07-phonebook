// todo Object form
// import { createSlice } from "@reduxjs/toolkit";
// import { addContact, deleteContact, fetchContacts } from "./operations";

// const contactsInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   extraReducers: {
//     [fetchContacts.pending]: handlePending,
//     [fetchContacts.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = false;
//       state.items = payload;
//     },
//     [fetchContacts.rejected]: handleRejected,

//     [addContact.pending]: handlePending,
//     [addContact.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(payload);
//       // state.items = [...state.items, payload];
//     },
//     [addContact.rejected]: handleRejected,

//     [deleteContact.pending]: handlePending,
//     [deleteContact.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = state.items.filter(({ id }) => id !== payload.id);
//       // const index = state.items.findIndex(
//       //   contact => contact.id === payload.id
//       // );
//       // state.items.splice(index, 1);
//     },
//     [deleteContact.rejected]: handleRejected,
//   }
// });

// export const contactsReducer = contactsSlice.reducer;

// todo function form, builder
// import { createSlice } from "@reduxjs/toolkit";
// import { addContact, deleteContact, fetchContacts } from "./operations";

// const contactsInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   extraReducers: builder => builder
//     .addCase(fetchContacts.pending, handlePending)
//     .addCase(fetchContacts.fulfilled, (state, { payload }) => {
//       state.isLoading = false;
//       state.error = false;
//       state.items = payload;
//     })
//     .addCase(fetchContacts.rejected, handleRejected)

//     .addCase(addContact.pending, handlePending)
//     .addCase(addContact.fulfilled, (state, { payload }) => {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(payload);
//       // state.items = [...state.items, payload];
//     })
//     .addCase(addContact.rejected, handleRejected)

//     .addCase(deleteContact.pending, handlePending)
//     .addCase(deleteContact.fulfilled, (state, { payload }) => {
//       state.isLoading = false;
//       state.error = null;
//       state.items = state.items.filter(({ id }) => id !== payload.id);
//       // const index = state.items.findIndex(
//       //   contact => contact.id === payload.id
//       // );
//       // state.items.splice(index, 1);
//     })
//     .addCase(deleteContact.rejected, handleRejected),
// });

// export const contactsReducer = contactsSlice.reducer;


// todo addCase, addMatcher
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const extraActions = [fetchContacts, addContact, deleteContact];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload.id);
        // const index = state.items.findIndex(
        //   contact => contact.id === payload.id
        // );
        // state.items.splice(index, 1);
      })

      .addMatcher(
        isAnyOf(...extraActions.map(action => action.pending)),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.rejected)),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
