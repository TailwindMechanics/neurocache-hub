//path: src\app\store.ts

import welcomeReducer from './app/hub/dashboard/(welcome)/welcomeSlice';
import dashboardReducer from './app/hub/dashboard/dashboardSlice';
import { configureStore } from '@reduxjs/toolkit'
import hubReducer from './app/hub/hubSlice';

export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
  reducer: {
    hub: hubReducer,
    dashboard: dashboardReducer,
    welcome: welcomeReducer,
  },
});