import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  filterText: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    changeTextFilter(state, action) {
      state.filterText = action.payload;
    },
  },
});

export const { changeTextFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
