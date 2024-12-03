import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  scanData: [],
  error: null,
};

export const scanInfo = createAsyncThunk(
  'scan/scanInfo',
  async (payload, {rejectWithValue}) => {
    console.log(id, 'idsddd');
    try {
      const res = await axios.post(`ingredients/`, payload);
      console.log(res, 'response from scaninfo');
      return res.data;
    } catch (error) {
      console.log(error, 'error');
      const errorMessage = error.response?.data?.message || error.message;
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