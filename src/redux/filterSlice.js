// todo 1 вариант local state is ''
// import { createSlice } from "@reduxjs/toolkit";

// const filterInitialState = '';

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: filterInitialState,
//   reducers: {
//     setFilterValue(state, action) {
//       return action.payload
//     },
//   }
// });

// export const { setFilterValue } = filterSlice.actions;

// export const filterReducer = filterSlice.reducer;

// export const getFilter = state => state.filter;

// todo 2 вариант local state {}
import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  value: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterValue(state, action) {
      state.value = action.payload
    },
  }
});

export const { setFilterValue } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const getFilter = state => state.filter.value;
