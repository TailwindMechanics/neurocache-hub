//path: src\app\hub\dashboard\dashboardSlice.ts

// path: src\app\hub\dashboard\dashboardSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

type DrawerState = {
  isOpen: boolean;
  content: ReactNode | null;
};

const initialState: DrawerState = {
  isOpen: false,
  content: null
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    openDrawer: (state, action: PayloadAction<ReactNode>) => {
      state.isOpen = true;
      state.content = action.payload;
    },
    closeDrawer: state => {
      state.isOpen = false;
      state.content = null;
    },
  }
});

export const { openDrawer, closeDrawer } = dashboardSlice.actions;
export default dashboardSlice.reducer;