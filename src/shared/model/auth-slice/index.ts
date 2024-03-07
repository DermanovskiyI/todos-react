import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IAuthState {
  isAutorized: boolean;
  isLoading: boolean;
}

const initialState: IAuthState = {
  isAutorized: false,
  isLoading: false,
};

export const autorize = createAsyncThunk(
  'user/autorize',
  async (_, thunkAPI) => {
    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 500);
      });
      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue('autorize error');
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAutorized = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(autorize.fulfilled, (state, action: PayloadAction<boolean>) => {
        console.log('action', action.payload);
        state.isAutorized = action.payload;
        state.isLoading = false;
      })
      .addCase(autorize.pending, (state) => {
        console.log('pending');
        state.isLoading = true;
      })
      .addCase(autorize.rejected, (state) => {
        console.log('rejected');
        state.isLoading = false;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
