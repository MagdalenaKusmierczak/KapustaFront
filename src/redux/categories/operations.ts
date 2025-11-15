import { createAsyncThunk } from "@reduxjs/toolkit";
import { getIncomeCategoriesAPI, getExpenseCategoriesAPI } from "../../service/api";

export const getIncomeCategoriesArr = createAsyncThunk(
  "categories/income",
  async (_, thunkAPI) => {
    try {
      const data = await getIncomeCategoriesAPI();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message || "Failed to get income categories");
    }
  }
);

export const getExpenseCategoriesArr = createAsyncThunk(
  "categories/expense",
  async (_, thunkAPI) => {
    try {
      const data = await getExpenseCategoriesAPI();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message || "Failed to get expense categories");
    }
  }
);
