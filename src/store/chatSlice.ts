//path: src\store\chatSlice.ts

import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  // Define initial state
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    // Define actions
  }
});

export const { ...actions } = chatSlice.actions;
export default chatSlice.reducer;