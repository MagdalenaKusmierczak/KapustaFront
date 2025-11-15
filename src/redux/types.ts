// Central Redux state interfaces

export interface AuthUser {
  email: string | null;
  id: string | null;
  newBalance?: number | null;
}

export interface AuthState {
  user: AuthUser;
  accessToken: string | null;
  refreshToken: string | null;
  sid: string | null;
  token: string | null;
  isRegistered: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface TransactionsMonthlyStats {
  [month: string]: number | undefined;
}

export interface TransactionItem {
  _id: string;
  type: "income" | "expense";
  category: string;
  amount: number;
  date: string; // ISO yyyy-mm-dd
  comment?: string;
}

export interface TransactionsState {
  balance: number;
  newBalance: number;
  isLoading: boolean;
  error: string | null;
  incomes: {
    incomeTransactions: TransactionItem[];
    monthsStats: TransactionsMonthlyStats;
  };
  expenses: {
    expensesTransactions: TransactionItem[];
    monthsStats: TransactionsMonthlyStats;
  };
  allTransactions: TransactionItem[];
}

export interface ReportsState {
  incomes: {
    total: number;
    incomesData: Record<string, number>;
  };
  expenses: {
    total: number;
    expensesData: Record<string, number>;
  };
  isLoading: boolean;
  error: string | null;
}

export interface CategoriesState {
  expense: string[];
  income: string[];
  isLoading: boolean;
  error: string | null;
}

export interface ReportsQueryState {
  reportsQuery: string;
  filteredData: TransactionItem[];
}


