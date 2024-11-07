import { createSlice } from "@reduxjs/toolkit";
import { getReports } from "./operations";

const initialState = {
  incomes: {
    total: 0,
    expensesData: {},
  },
  expenses: {
    total: 0,
    incomesData: {},
  },
  isLoading: false,
  error: null,
};

export const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const reportsSlice = createSlice({
  name: "reports",
  initialState,
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
