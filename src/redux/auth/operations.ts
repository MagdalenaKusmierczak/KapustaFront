import { createAsyncThunk } from "@reduxjs/toolkit";
import { Report } from "notiflix/build/notiflix-report-aio";

import {
  loginAPI,
  logoutAPI,
  setAuthHeader,
  clearAuthHeader,
  refreshTokenApi,
  registerAPI,
  fullUserInfoAPI,
} from "./api";

// Login Thunk
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const data = await loginAPI(credentials);
      setAuthHeader(data.accessToken);

      return data;
    } catch (error) {
      if (error.response.status === 403) {
        Report.failure("Email or Password is wrong.");
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// Logout Thunk
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await logoutAPI();
    clearAuthHeader();
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
// Refresh user Thunk
export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const refreshToken = state.auth.refreshToken;
    const sid = state.auth.sid;

    try {
      const data = await refreshTokenApi(sid, refreshToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//Register
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const data = await registerAPI(user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//User fetch
export const fetchUser = createAsyncThunk("auth/user", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const accessToken = state.auth.accessToken;
    setAuthHeader(accessToken);
    const data = await fullUserInfoAPI();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
