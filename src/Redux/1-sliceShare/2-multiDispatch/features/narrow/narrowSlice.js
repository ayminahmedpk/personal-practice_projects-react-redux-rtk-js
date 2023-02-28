import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit'

const initialState = {
  data: '',
  upperCaseData: '',
}

const narrowSlice = createSlice({
  name: 'narrow',
  initialState,
  reducers: {
    setData : (state, action) => {
      state.data = action.payload;
    },
    // Works - gets the most updated state even before component re-renders
    setUpperCaseData : (state, action) => {
      state.upperCaseData = state.data.toUpperCase();
    },
    // Doesn't work
    // setUpperCaseData : (state, action) => {
    //   state.upperCaseData = action.payload.toUpperCase();
    // },
  }
});


// export const {} = narrowSlice.actions;

export const narrowActions = narrowSlice.actions;
export const narrowReducer = narrowSlice.reducer;

// export default narrowSlice.reducer