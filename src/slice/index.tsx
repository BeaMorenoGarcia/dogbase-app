import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";

interface AuthState {
  user: User | null;
  error: unknown | null;
}

const initialState: AuthState = {
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.user = { ...action.payload };
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<unknown>) => {
      state.user = null;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.user = null;
    },
    logoutFailure: (state,  action: PayloadAction<unknown>) => {
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure, logoutSuccess,  logoutFailure} =
  authSlice.actions;

export default authSlice.reducer;
