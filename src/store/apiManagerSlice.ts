//path: src\app\hub\apimanager\apiManagerSlice.ts

import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  // Define initial state
};

const apiManagerSlice = createSlice({
  name: 'apiManager',
  initialState,
  reducers: {
    // Define actions
  }
});

export const { ...actions } = apiManagerSlice.actions;
export default apiManagerSlice.reducer;