import axios from "../../service/api/axios.config";
import type { Store } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Report } from "notiflix/build/notiflix-report-aio";

export const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};


let storeRef: Store<RootState> | null = null;

export const setupInterceptor = (store: Store<RootState>) => {
  storeRef = store;
  
  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (originalRequest?.method?.toUpperCase() === 'OPTIONS') {
        return Promise.reject(error);
      }

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          if (storeRef) {
            const state = storeRef.getState();
            const { refreshToken, sid } = state.auth;

            if (refreshToken && sid) {
              const data = await refreshTokenApi(sid, refreshToken);
              
              storeRef.dispatch({
                type: 'auth/refreshUser/fulfilled',
                payload: data
              });
              
              setAuthHeader(data.newAccessToken);
              originalRequest.headers.Authorization = `Bearer ${data.newAccessToken}`;
              
              return axios(originalRequest);
            }
          }

          await handleLogout();
          return Promise.reject(error);
        } catch (refreshError) {
          await handleLogout();
          return Promise.reject(refreshError);
        }
      }
      if (error.response?.status === 401) {
        await handleLogout();
      }

      return Promise.reject(error);
    }
  );
};

const handleLogout = async () => {
  clearAuthHeader();
  
  if (storeRef) {
    storeRef.dispatch({ type: 'auth/logOut/fulfilled' });
    localStorage.removeItem('persist:auth');
    await new Promise(resolve => setTimeout(resolve, 100));
    
  }
};

export const registerAPI = async (user: { email: string; password: string }) => {
  try {
    const { data } = await axios.post("/auth/register", user);
    return data;
  } catch (error: any) {
    if (error.response?.status === 409) {
      Report.failure(
        "Registration Failed",
        `User with email ${user.email} already exists. Please login instead.`,
        "OK"
      );
    } else {
      Report.failure(
        "Registration Failed", 
        error.response?.data?.message || error.message || "An error occurred during registration.",
        "OK"
      );
    }
    throw error;
  }
};

export const loginAPI = async (user: { email: string; password: string }) => {
  const { data } = await axios.post("/auth/login", user);
  setAuthHeader(data.accessToken);
  return data;
};

export const logoutAPI = async () => {
  const { data } = await axios.post("/auth/logout");
  clearAuthHeader();
  return data;
};


export const fullUserInfoAPI = async () => {
  const { data } = await axios.get("/user");
  return data;
};

export const refreshTokenApi = async (sid: string, refreshToken: string) => {
  const { data } = await axios.post(
    "/auth/refresh",
    { sid },
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );
  setAuthHeader(data.newAccessToken);
  return data;
};
