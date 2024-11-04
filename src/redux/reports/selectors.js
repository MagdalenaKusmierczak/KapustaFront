export const selectReports = (store) => store.reports;

export const selectIncomeTotal = (store) => store.reports.incomes.total;

export const selectExpensesTotal = (store) => store.reports.expenses.total;

export const selectIncomeData = (store) => store.reports.incomes.incomesData;

export const selectExpensesData = (store) =>
  store.reports.expenses.expensesData;
