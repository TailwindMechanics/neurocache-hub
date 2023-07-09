//path: src\store.ts

import dashboardReducer from './store/dashboardSlice';
import { configureStore } from '@reduxjs/toolkit'
import hubReducer from './store/hubSlice';

export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
  reducer: {
    hub: hubReducer,
    dashboard: dashboardReducer,
    profile: dashboardReducer,
    agents: dashboardReducer,
    chat: dashboardReducer,
    api: dashboardReducer,
    docs: dashboardReducer,
  },
});