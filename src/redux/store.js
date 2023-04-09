import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
// import { contactsReducer, filterReducer } from './redusers';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});


