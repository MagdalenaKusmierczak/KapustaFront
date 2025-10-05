import { createSlice } from "@reduxjs/toolkit";
import type { ReportsState } from "../types";
import { createAsyncSlice } from "../../utils/redux/createAsyncSlice";
import { getReports } from "./operations";

const initialState: ReportsState = {
  incomes: {
    total: 0,
    incomesData: {},
  },
  expenses: {
    total: 0,
    expensesData: {},
  },
  isLoading: false,
  error: null,
};

const { handlePending, handleRejected } = createAsyncSlice<ReportsState>();

export const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReports.pending, handlePending)
      .addCase(getReports.fulfilled, (state, action) => {
        state.incomes.total = action.payload.incomes.total;
        state.expenses.total = action.payload.expenses.total;
        state.incomes.incomesData = action.payload.incomes.incomesData;
        state.expenses.expensesData = action.payload.expenses.expensesData;

        state.isLoading = false;
      })
      .addCase(getReports.rejected, handleRejected);
  },
});

export const reportsReducer = reportsSlice.reducer;
