import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { transactionsReducer } from "./transactions/slice";
import { reportsReducer } from "./reports/slice";
import { reportsQueryReducer } from "./reportsQuery/reportsQuery.slice";
import { categoriesReducer} from "./categories/slice";
import modalReducer from "./modal/modalSlice";

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
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
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
