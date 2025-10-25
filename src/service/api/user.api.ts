import axios from "./axios.config";

export const updateBalanceAPI = async (value: { newBalance: string }) => {
  const { data } = await axios.patch("/user/balance", value);
  return data;
};

