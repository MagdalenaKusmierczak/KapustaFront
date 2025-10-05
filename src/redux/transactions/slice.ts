import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TransactionsState } from "../types";
import { refreshUser, logIn } from "../auth/operations";
import {
  addIncome,
  getIncome,
  addExpense,
  getExpenses,
  deleteTransaction,
  getAllTransactions,
  updateBalance,
} from "./operations";

const initialState: TransactionsState = {
  balance: 0,
  newBalance: 0,
  isLoading: false,
  error: null,
  incomes: {
    incomeTransactions: [],
    monthsStats: {},
  },
  expenses: {
    expensesTransactions: [],
    monthsStats: {},
  },
  allTransactions: [],
};

const handlePending = (state: TransactionsState) => {
  state.isLoading = true;
};

const handleRejected = (state: TransactionsState, action: PayloadAction<unknown>) => {
  state.isLoading = false;
  state.error = (action.payload as string) ?? null;
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    updateAuthBalance: (state, action) => {
      state.newBalance = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Add Income
      .addCase(addIncome.pending, handlePending)
      .addCase(addIncome.fulfilled, (state, action) => {
        state.newBalance = action.payload.newBalance;
        state.incomes.incomeTransactions.push(action.payload.transaction);
        state.allTransactions.push(action.payload.transaction);
        state.isLoading = false;
      })
      .addCase(addIncome.rejected, handleRejected)
      // Get Income
      .addCase(getIncome.pending, handlePending)
      .addCase(getIncome.fulfilled, (state, action) => {
        state.incomes.incomeTransactions = action.payload.incomes;
        state.incomes.monthsStats = action.payload.monthsStatistics;
        state.isLoading = false;
      })
      .addCase(getIncome.rejected, handleRejected)
      // Add Expense
      .addCase(addExpense.pending, handlePending)
      .addCase(addExpense.fulfilled, (state, action) => {
        state.newBalance = action.payload.newBalance;
        state.expenses.expensesTransactions.push(action.payload.transaction);
        state.allTransactions.push(action.payload.transaction);
        state.isLoading = false;
      })
      .addCase(addExpense.rejected, handleRejected)
      // Get Expenses
      .addCase(getExpenses.pending, handlePending)
      .addCase(getExpenses.fulfilled, (state, action) => {
        state.expenses.expensesTransactions = action.payload.expenses;
        state.expenses.monthsStats = action.payload.monthsStatistics;
        state.isLoading = false;
      })
      .addCase(getExpenses.rejected, handleRejected)
      // Update Balance
      .addCase(updateBalance.pending, handlePending)
      .addCase(updateBalance.fulfilled, (state, action) => {
        state.newBalance = action.payload.newBalance;
        state.isLoading = false;
      })
      .addCase(updateBalance.rejected, handleRejected)
      // Delete Transaction
      .addCase(deleteTransaction.pending, handlePending)
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.newBalance = action.payload.newBalance;
        state.isLoading = false;
        state.allTransactions = state.allTransactions.filter(
          (el) => el._id !== (action.payload as any).id
        );
        state.incomes.incomeTransactions =
          state.incomes.incomeTransactions.filter(
            (el) => el._id !== (action.payload as any).id
          );
        state.expenses.expensesTransactions =
          state.expenses.expensesTransactions.filter(
            (el) => el._id !== (action.payload as any).id
          );
      })

      .addCase(deleteTransaction.rejected, handleRejected)
      // Get all transactions / for mobile devices ?
      .addCase(getAllTransactions.pending, handlePending)
      .addCase(getAllTransactions.fulfilled, (state, action) => {
        state.newBalance = action.payload.balance;
        state.allTransactions = action.payload.transactions;
        state.isLoading = false;
      })
      .addCase(getAllTransactions.rejected, handleRejected)
      // refresh user
      .addCase(refreshUser.fulfilled, (state, action) => {
        const { balance, transactions } = action?.payload;
        state.newBalance = balance;
        state.allTransactions = transactions;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, handleRejected)
      // login
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.newBalance = action.payload.userData.balance;
      })
      .addCase(logIn.rejected, handleRejected);
  },
});

export const transactionsReducer = transactionsSlice.reducer;
export const { updateAuthBalance } = transactionsSlice.actions;
