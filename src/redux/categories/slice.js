import { createSlice } from "@reduxjs/toolkit";
import { getIncomeCategoriesArr, getExpenseCategoriesArr } from "./operations";

const initialState = {
  expense: [],
  income: [],
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

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getIncomeCategoriesArr.pending, handlePending)
      .addCase(getIncomeCategoriesArr.fulfilled, (state, action) => {
        state.income = action.payload.incomeCategories;
        state.isLoading = false;
      })
      .addCase(getIncomeCategoriesArr.rejected, handleRejected)
      .addCase(getExpenseCategoriesArr.pending, handlePending)
      .addCase(getExpenseCategoriesArr.fulfilled, (state, action) => {
        state.expense = action.payload.expenseCategories;
        state.isLoading = false;
      })
      .addCase(getExpenseCategoriesArr.rejected, handleRejected);
  },
});

export const categoriesReducer = categoriesSlice.reducer;
