import { createAsyncThunk } from "@reduxjs/toolkit";
import { Report } from "notiflix/build/notiflix-report-aio";
import type { RootState } from "../store";

import {
  loginAPI,
  logoutAPI,
  setAuthHeader,
  clearAuthHeader,
  refreshTokenApi,
  registerAPI,
  fullUserInfoAPI,
} from "./api";

export interface AuthCredentials {
  email: string;
  password: string;
}

// Login Thunk
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials: AuthCredentials, thunkAPI) => {
    try {
      const data = await loginAPI(credentials);
      setAuthHeader(data.accessToken);

      return data;
    } catch (error: any) {
      if (error.response?.status === 403) {
        Report.failure("Email or Password is wrong.");
      }

      return thunkAPI.rejectWithValue(error?.message || "Login failed");
    }
  }
);

// Logout Thunk
export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await logoutAPI();
    clearAuthHeader();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.message || "Logout failed");
  }
});

// Refresh user Thunk
export const refreshUser = createAsyncThunk<any, void, { state: RootState }>(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const refreshToken = state.auth.refreshToken;
    const sid = state.auth.sid;

    if (!refreshToken || !sid) {
      return thunkAPI.rejectWithValue("No refresh token or session ID");
    }

    try {
      const data = await refreshTokenApi(sid, refreshToken);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message || "Token refresh failed");
    }
  }
);

// Register
export const register = createAsyncThunk(
  "auth/register",
  async (user: AuthCredentials, thunkAPI) => {
    try {
      const data = await registerAPI(user);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message || "Registration failed");
    }
  }
);

// User fetch
export const fetchUser = createAsyncThunk<any, void, { state: RootState }>(
  "auth/user",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const accessToken = state.auth.accessToken;
      
      if (!accessToken) {
        return thunkAPI.rejectWithValue("No access token");
      }
      
      setAuthHeader(accessToken);
      const data = await fullUserInfoAPI();
      return data;
    } catch (error: any) {
      // If token is invalid/expired, the interceptor will handle logout
      // Just reject the action
      clearAuthHeader();
      return thunkAPI.rejectWithValue(error?.message || "Failed to fetch user");
    }
  }
);
