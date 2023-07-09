//path: src\store\dashboardSlice.ts

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Define initial state for dashboard here
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    // Define dashboard-specific actions here
  }
});

export const { ...actions } = dashboardSlice.actions;
export default dashboardSlice.reducer;
