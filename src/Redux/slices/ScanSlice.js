import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {baseURL} from '../../Utils/api';
import axios from 'axios';

const initialState = {
  isLoading: false,
  scanData: [],
  error: null,
};

export const scanInfo = createAsyncThunk(
  'scan/scanInfo',
  async (formData, {rejectWithValue}) => {
    try {
      const res = await axios.post(`${baseURL}ingredients/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data;
    } catch (error) {
      console.error('Error in scanInfo:', error);
      const errorMessage =
        error.response?.data?.message || error.message || 'Unknown error';
      console.error('Error Message:', errorMessage);

      return rejectWithValue(errorMessage);
    }
  },
);

const scanSlice = createSlice({
  name: 'scan',
  initialState,
  reducers: {
    clearStore: state => {
      state.scanData = [];
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(scanInfo.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(scanInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.scanData = action.payload;
      })
      .addCase(scanInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {clearStore} = scanSlice.actions;

export default scanSlice.reducer;
