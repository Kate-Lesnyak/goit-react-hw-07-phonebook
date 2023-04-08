import { configureStore } from "@reduxjs/toolkit";

// import { persistedContactsReducer } from "./contactsSlice";
// import { filterReducer } from "./filterSlice";

import { contactsReducer, filterReducer } from './redusers';

export const store = configureStore({
  reducer: {
    // contacts: persistedContactsReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// export const persistor = persistStore(store);

