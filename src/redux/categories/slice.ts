import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CategoriesState } from "../types";
import { getIncomeCategoriesArr, getExpenseCategoriesArr } from "./operations";

const initialState: CategoriesState = {
  expense: [],
  income: [],
  isLoading: false,
  error: null,
};

export const handlePending = (state: CategoriesState) => {
  state.isLoading = true;
};

  const handleRejected = (state: CategoriesState, action: PayloadAction<unknown>) => {
  state.isLoading = false;
  state.error = (action.payload as string) ?? null;
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
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
