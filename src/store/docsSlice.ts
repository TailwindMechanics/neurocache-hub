//path: src\store\docsSlice.ts

import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  // Define initial state
};

const docsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {
    // Define actions
  }
});

export const { ...actions } = docsSlice.actions;
export default docsSlice.reducer;