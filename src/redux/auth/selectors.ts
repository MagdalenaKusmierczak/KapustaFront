import type { RootState } from "../store";

export const selectIsLoggedIn = (store: RootState) => store.auth.isLoggedIn;

export const selectUser = (store: RootState) => store.auth.user.email;

export const selectToken = (store: RootState) => store.auth.accessToken;

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;

export const selectIsRegistered = (state: RootState) => state.auth.isRegistered;