//path: src\app\hub\hubSlice.ts

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Define initial state for hub here
};

const hubSlice = createSlice({
  name: 'hub',
  initialState,
  reducers: {
    // Define hub-specific actions here
  }
});

export const { ...actions } = hubSlice.actions;
export default hubSlice.reducer;
