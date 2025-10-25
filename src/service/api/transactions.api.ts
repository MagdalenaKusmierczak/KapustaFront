import axios from "./axios.config";

interface TransactionInfo {
  description: string;
  amount: number;
  date: string;
  category: string;
}

export const addIncomeAPI = async (info: TransactionInfo) => {
  const { data } = await axios.post("/transaction/income", info);
  return data;
};

export const getIncomeAPI = async () => {
  const { data } = await axios.get("/transaction/income");
  return data;
};

export const addExpenseAPI = async (info: TransactionInfo) => {
  const { data } = await axios.post("/transaction/expense", info);
  return data;
};

export const getExpenseAPI = async () => {
  const { data } = await axios.get("/transaction/expense");
  return data;
};

export const deleteTransactionAPI = async (id: string) => {
  const { data } = await axios.delete(`/transaction/${id}`);
  return data;
};

export const getIncomeCategoriesAPI = async () => {
  const { data } = await axios.get("/transaction/income-categories");
  return data;
};

export const getExpenseCategoriesAPI = async () => {
  const { data } = await axios.get("/transaction/expense-categories");
  return data;
};

export const getPeriodDataAPI = async (date: string) => {
  const { data } = await axios.get(`/transaction/period-data?date=${date}`);
  return data;
};

