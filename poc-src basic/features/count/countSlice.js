import { createSlice } from "@reduxjs/toolkit";

// To support wide actions
import { globalActions } from "../global/global";


const initialState = { count: 0 };

// Uses immer implicitly - code may directly mutate state
// So reducers DO stuff to state, not return a new one

const countSlice = createSlice({
  name         : 'count',
  initialState          ,
  reducers     : {
    incrementCount : (state) => {state.count++ ;  } ,
    decrementCount : (state) => {state.count-- ;  } ,
    resetCount     : (state) => {state.count = 0 ;} ,
  },
  extraReducers: (builder) => {
    builder.addCase(globalActions.reset, (state) => {state.count = 0})
  }
});


export const countReducer = countSlice.reducer;
export const countActions = countSlice.actions;