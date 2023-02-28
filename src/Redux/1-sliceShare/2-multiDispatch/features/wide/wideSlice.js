import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: ''
}

const wideSlice = createSlice({
  name: 'wide',
  initialState,
  reducers: {
    setData : (state, action) => {
      state.data = action.payload;
      // state.data = action.payload.toUpperCase();
    }
  }
});


// export const {} = wideSlice.actions;

export const wideActions = wideSlice.actions;
export const wideReducer = wideSlice.reducer;

// export default wideSlice.reducer