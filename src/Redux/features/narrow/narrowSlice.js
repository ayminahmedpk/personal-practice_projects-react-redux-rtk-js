import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: ''
}

const narrowSlice = createSlice({
  name: 'narrow',
  initialState,
  reducers: {
    setData : (state, action) => {
      state.data = action.payload;
    }
  }
});


// export const {} = narrowSlice.actions;

export const narrowActions = narrowSlice.actions;
export const narrowReducer = narrowSlice.reducer;

// export default narrowSlice.reducer