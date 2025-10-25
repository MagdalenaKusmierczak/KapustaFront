import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPeriodDataAPI } from "../../service/api";

// Get reports Thunk
export const getReports = createAsyncThunk(
  "reports/getReports",
  async (value: string, thunkAPI) => {
    try {
      const data = await getPeriodDataAPI(value);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message || "Failed to get reports");
    }
  }
);
