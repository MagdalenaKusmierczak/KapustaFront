export const selectIsLoggedIn = (store) => store.auth.isLoggedIn;

export const selectUser = (store) => store.auth.user.email;

export const selectToken = (store) => store.auth.token;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectIsLoading = (state) => state.auth.isLoading;
