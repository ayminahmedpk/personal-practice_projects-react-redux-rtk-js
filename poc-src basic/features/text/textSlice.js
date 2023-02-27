import { createSlice } from "@reduxjs/toolkit";

import { globalActions } from "../global/global";

const initialState = {text: '[initial]'};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    writeText: (state, action) => {state.text = action.payload},
    resetText: (state) => {state.text = '[reset-text]'},
  },
  extraReducers: (builder) => {
    builder.addCase(globalActions.reset, (state) => {state.text = '[reset-global]';})
  }
})


export const textReducer = textSlice.reducer;
export const textActions = textSlice.actions;