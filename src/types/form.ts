import type { AsyncThunk } from "@reduxjs/toolkit";

export interface FormElements {
  descr: HTMLInputElement;
  sum: HTMLInputElement;
}

export interface TransactionFormData {
  description: string;
  amount: number;
  date: string;
  category: string;
}

export interface CategoryData {
  categoryArray: string[];
  functionToDispatch: AsyncThunk<any, TransactionFormData, any>;
}

export interface FormRef {
  current: HTMLFormElement | null;
}
