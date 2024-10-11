export const selectIsLoading = (state) => state.transactions.isLoading;

export const selectError = (state) => state.transactions.error;

export const selectBalance = (state) => state.transactions.newBalance;

export const selectAllTransactions = (store) =>
  store.transactions.allTransactions;

export const selectExpensesTransactions = (state) =>
  state.transactions.expences.expensesTransactions;

export const selectIncomeTransactions = (state) =>
  state.transactions.incomes.incomeTransactions;

export const selectTransactions = (state) => state.transactions.transactions;

export const selectIncomeSummary = (store) =>
  store.transactions.incomes.monthsStats;

export const selectExpensesSummary = (store) =>
  store.transactions.expences.monthsStats;
