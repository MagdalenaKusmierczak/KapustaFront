import type { RootState } from "../store";

export const selectReports = (store: RootState) => store.reports;

export const selectIncomeTotal = (store: RootState) => store.reports.incomes.total;

export const selectExpensesTotal = (store: RootState) => store.reports.expenses.total;

export const selectIncomeData = (store: RootState) => store.reports.incomes.incomesData;

export const selectExpensesData = (store: RootState) =>
  store.reports.expenses.expensesData;
