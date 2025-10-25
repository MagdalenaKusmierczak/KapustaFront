import type { TransactionItem } from "../redux/types";

export type TransactionType = "income" | "expense";

/**
 * Sorts transactions by date (newest first)
 */
export const sortTransactionsByDate = (transactions: TransactionItem[]): TransactionItem[] => {
  return transactions.slice().sort((a, b) => {
    const first = new Date(a.date).getTime();
    const second = new Date(b.date).getTime();
    return second - first;
  });
};

/**
 * Formats date from YYYY-MM-DD to DD.MM.YYYY
 */
export const formatDate = (date: string): string => {
  return date.split("-").reverse().join(".");
};

/**
 * Formats amount with proper sign and currency
 */
export const formatAmount = (amount: number, type: TransactionType): string => {
  const sign = type === "expense" ? "-" : "+";
  return `${sign} ${amount}.00 UAH`;
};

/**
 * Returns color based on transaction type
 */
export const getTransactionColor = (type: TransactionType): string => {
  return type === "expense" ? "red" : "green";
};

