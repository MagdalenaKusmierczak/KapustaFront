import type { RootState } from "../store";

export const selectExpensesCategories = (state: RootState) => state.categories.expense;

export const selectIncomeCategories = (state: RootState) => state.categories.income;
