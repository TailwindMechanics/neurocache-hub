//path: src\app\hub\dashboard\(welcome)\welcomeSlice.ts

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Define initial state for welcome here
};

const welcomeSlice = createSlice({
  name: 'welcome',
  initialState,
  reducers: {
    // Define welcome-specific actions here
  }
});

export const { ...actions } = welcomeSlice.actions;
export default welcomeSlice.reducer;