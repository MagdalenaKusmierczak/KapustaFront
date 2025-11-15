import { createAsyncThunk } from "@reduxjs/toolkit";
import { fullUserInfoAPI } from "../auth/api";
import {
  addIncomeAPI,
  getIncomeAPI,
  addExpenseAPI,
  getExpenseAPI,
  deleteTransactionAPI,
} from "../../service/api";
import { updateBalanceAPI } from "../../service/api";

interface TransactionData {
  description: string;
  amount: number;
  date: string;
  category: string;
}

// AddIncome transaction Thunk
export const addIncome = createAsyncThunk(
  "transactions/addIncome",
  async (value: TransactionData, thunkAPI) => {
    try {
      const data = await addIncomeAPI(value);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message || "Failed to add income");
    }
  }
);

// Get income transactions Thunk
export const getIncome = createAsyncThunk(
  "transactions/getIncome",
  async (_, thunkAPI) => {
    try {
      const data = await getIncomeAPI();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message || "Failed to get income");
    }
  }
);

// Add expense transaction Thunk
export const addExpense = createAsyncThunk(
  "transactions/addExpense",
  async (value: TransactionData, thunkAPI) => {
    try {
      const data = await addExpenseAPI(value);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message || "Failed to add expense");
    }
  }
);
// Get expenses transactions Thunk
export const getExpenses = createAsyncThunk(
  "transactions/getExpenses",
  async (_, thunkAPI) => {
    try {
      const data = await getExpenseAPI();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message || "Failed to get expenses");
    }
  }
);
// Update balance Thunk
export const updateBalance = createAsyncThunk(
  "transactions/updateBalance",
  async (value: { newBalance: string }, thunkAPI) => {
    try {
      const data = await updateBalanceAPI(value);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message || "Failed to update balance");
    }
  }
);
// Refresh user Thunk
export const getAllTransactions = createAsyncThunk(
  "transactions/getAllTransactions",
  async (_, thunkAPI) => {
    try {
      const data = await fullUserInfoAPI();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message || "Failed to get transactions");
    }
  }
);

// Delete transaction Thunk
export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (id: string, thunkAPI) => {
    try {
      const { newBalance } = await deleteTransactionAPI(id);
      return { newBalance, id };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message || "Failed to delete transaction");
    }
  }
);
