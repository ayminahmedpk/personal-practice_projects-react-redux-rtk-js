import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';

import { globalActions } from '../global/global';


const initialState = {
  loading : false ,
  users   : []    ,
  error   : ''    ,
}


// Generates action types to represent promise state - pending, fulfilled, rejected
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => (
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
));


const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false          ;
      state.users   = action.payload ;
      state.error   = ''             ;
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false                ;
      state.users   = []                   ;
      state.error   = action.error.message ;
    })
    builder.addCase(globalActions.reset, (state) => {
      return initialState;
    })
  }
})

export const userReducer = userSlice.reducer;