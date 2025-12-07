import type { RootState } from "../store";

export const selectIsLoading = (state: RootState) => state.transactions.isLoading;

export const selectError = (state: RootState) => state.transactions.error;

export const selectBalance = (state: RootState) => state.transactions.newBalance;

export const selectAllTransactions = (store: RootState) =>
  store.transactions.allTransactions;

export const selectExpensesTransactions = (state: RootState) =>
  state.transactions.expenses.expensesTransactions;

export const selectIncomeTransactions = (state: RootState) =>
  state.transactions.incomes.incomeTransactions;


export const selectIncomeSummary = (store: RootState) =>
  store.transactions.incomes.monthsStats;

export const selectExpensesSummary = (store: RootState) =>
  store.transactions.expenses.monthsStats;
