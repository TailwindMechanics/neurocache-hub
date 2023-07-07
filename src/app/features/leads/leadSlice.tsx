//path: src\app\features\leads\leadSlice.tsx

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

// Define types for your data
interface Lead {
  id: string;
  name: string;
  email: string;
  // Add more fields according to your data
}

interface LeadsState {
  isLoading: boolean;
  leads: Lead[];
}

const initialState: LeadsState = {
  isLoading: false,
  leads: []
};

// Create async thunk
export const getLeadsContent = createAsyncThunk<Lead[], void>('/leads/content', async () => {
  const response = await axios.get<Lead[]>('/api/users?page=2', {});
  return response.data;
})

// Create slice
export const leadsSlice = createSlice({
  name: 'leads',
  initialState,
  reducers: {
    addNewLead: (state, action: PayloadAction<Lead>) => {
      state.leads = [...state.leads, action.payload]
    },
    deleteLead: (state, action: PayloadAction<number>) => {
      state.leads.splice(action.payload, 1)
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getLeadsContent.pending, state => {
        state.isLoading = true;
      })
      .addCase(getLeadsContent.fulfilled, (state, action: PayloadAction<Lead[]>) => {
        state.leads = action.payload;
        state.isLoading = false;
      })
      .addCase(getLeadsContent.rejected, state => {
        state.isLoading = false;
      });
  }
})

export const { addNewLead, deleteLead } = leadsSlice.actions

export default leadsSlice.reducer