import { createAsyncThunk } from "@reduxjs/toolkit";
import { getIncomeCategoriesAPI, getExpenseCategoriesAPI } from "../api";

export const getIncomeCategoriesArr = createAsyncThunk(
  "categories/income",
  async (thunkAPI) => {
    try {
      const data = await getIncomeCategoriesAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExpenseCategoriesArr = createAsyncThunk(
  "categories/expense",
  async (thunkAPI) => {
    try {
      const data = await getExpenseCategoriesAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
