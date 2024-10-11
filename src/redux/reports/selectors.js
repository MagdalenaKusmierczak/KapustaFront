export const selectReports = (store) => store.reports;

export const selectIncomeTotal = (store) =>
    store.reports.reports.incomes.incomeData.Total;

export const selectExpensesTotal = (store) =>
  store.reports.reports.expenses.expenseTotal;