//path: src\app\hub\profile\profileSlice.ts

import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  // Define initial state
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // Define actions
  }
});

export const { ...actions } = profileSlice.actions;
export default profileSlice.reducer;