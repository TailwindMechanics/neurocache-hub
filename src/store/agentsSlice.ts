//path: src\app\hub\agents\agentsSlice.ts

import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  // Define initial state
};

const agentsSlice = createSlice({
  name: 'agents',
  initialState,
  reducers: {
    // Define actions
  }
});

export const { ...actions } = agentsSlice.actions;
export default agentsSlice.reducer;