//path: src\app\store.ts

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import headerSlice from './features/common/headerSlice'
import modalSlice from './features/common/modalSlice'
import rightDrawerSlice from './features/common/rightDrawerSlice'
import { leadsSlice } from './features/leads/leadSlice'


const combinedReducer = {
  header: headerSlice,
  rightDrawer: rightDrawerSlice,
  modal: modalSlice,
  lead: leadsSlice.reducer,
}

export const store = configureStore({
  reducer: combinedReducer,
})

export interface RightDrawerState {
  isOpen: boolean;
  bodyType: string;
  extraObject: any; // replace 'any' with the correct type if known
  header: string;
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>