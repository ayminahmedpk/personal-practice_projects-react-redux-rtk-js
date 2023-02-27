import { createSlice } from "@reduxjs/toolkit";


const globalSlice = createSlice({
  name: 'global',
  initialState: {},
  reducers: {
    reset: () => {},
  }
})


export const globalReducer = globalSlice.reducer;
export const globalActions = globalSlice.actions;