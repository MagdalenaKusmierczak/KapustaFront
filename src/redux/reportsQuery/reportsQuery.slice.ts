import { createSlice } from "@reduxjs/toolkit";
import type { ReportsQueryState, TransactionItem } from "../types";

const reportQuerySlice = createSlice({
  name: "reportsQuery",
  initialState: {
    reportsQuery: "",
    filteredData: [],
  } as ReportsQueryState,
  reducers: {
    reportsQueryAction(state, action: { payload: string }) {
      state.reportsQuery = action.payload;
    },
    filteredDataAction(state, action: { payload: TransactionItem[] }) {
      state.filteredData = action.payload;
    },
  },
});

export const { reportsQueryAction, filteredDataAction } =
  reportQuerySlice.actions;
export const reportsQueryReducer = reportQuerySlice.reducer;
