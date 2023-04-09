import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addContactError, addContactRequest, addContactSuccess, deleteContactError, deleteContactRequest, deleteContactSuccess, fetchContactsError, fetchContactsRequest, fetchContactsSuccess, setFilterValue } from "./actions";

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsRequest]: () => null,
  [fetchContactsError]: (_, { payload }) => payload,

  [addContactRequest]: () => null,
  [addContactError]: (_, { payload }) => payload,

  [deleteContactRequest]: () => null,
  [deleteContactError]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items, isLoading, error,
});

export const filterReducer = createReducer('', {
  [setFilterValue]: (_, { payload }) => payload,
});


