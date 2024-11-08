import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

const initialState = {
  user: { email: null, id: null },
  accessToken: null,
  refreshToken: null,
  sid: null,
  token: null,
  isRegistered: false,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.isRefreshing = false;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAccessToken: (state, action) => {
      state.token = action.payload.accessToken;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.isRegistered = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, handleRejected)
      // login
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        const { balance, email, id } = action.payload.userData;
        state.user = { email, id, newBalance: balance };
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, handleRejected)
      // logout
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, (state) => {
        state.user = { email: null, id: null, newBalance: null };
        state.accessToken = null;
        state.refreshToken = null;
        state.sid = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, handleRejected)
      // refresh user
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.accessToken = action.payload.newAccessToken;
        state.refreshToken = action.payload.newRefreshToken;
        state.sid = action.payload.newSid;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.user = { email: null, id: null, newBalance: null };
        state.token = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;

export const { addAccessToken } = authSlice.actions;
