import { createSlice } from "@reduxjs/toolkit";
import type { CategoriesState } from "../types";
import { createAsyncSlice } from "../../utils/redux/createAsyncSlice";
import { getIncomeCategoriesArr, getExpenseCategoriesArr } from "./operations";

const initialState: CategoriesState = {
  expense: [],
  income: [],
  isLoading: false,
  error: null,
};

const { handlePending, handleRejected } = createAsyncSlice<CategoriesState>();

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
