import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { transactionsReducer } from "./transactions/slice";
import { reportsReducer } from "./reports/slice";
import { reportsQueryReducer } from "./reportsQuery/reportsQuery.slice";
import { categoriesReducer} from "./categories/slice";
import modalReducer from "./modal/modalSlice";
import type { AuthState } from "./types";
import type { Reducer } from "redux";
import type { PersistPartial } from "redux-persist/es/persistReducer";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ['user', 'accessToken', 'refreshToken', 'token','sid', 'isLoggedIn',]
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer) as Reducer<
      AuthState & PersistPartial
    >,
    transactions: transactionsReducer,
    reports: reportsReducer,
    reportsQuery: reportsQueryReducer,
    categories: categoriesReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          "your/action/type",
        ],
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }),
});

export const persistor = persistStore(store);

// Infer RootState from store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;