//path: src\app\hub\hubSlice.ts

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

const hubSlice = createSlice({
  name: 'hub',
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

export const { openDrawer, closeDrawer } = hubSlice.actions;
export default hubSlice.reducer;
