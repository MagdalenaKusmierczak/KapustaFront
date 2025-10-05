import { useLocation } from "react-router-dom";

export const useRouteDetection = () => {
  const location = useLocation();
  
  const isIncome = location.pathname === "/income";
  const isExpenses = location.pathname === "/expenses";
  const isTransactions = location.pathname.includes("/transactions");
  const isIncomeTransactions = location.pathname === "/income/transactions";
  const isExpensesTransactions = location.pathname === "/expenses/transactions";
  const isReports = location.pathname === "/reports";
  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";
  
  // Combined checks for common patterns
  const isIncExp = isIncome || isExpenses;
  const isAuthPage = isLogin || isRegister;
  
  return {
    isIncome,
    isExpenses,
    isTransactions,
    isIncomeTransactions,
    isExpensesTransactions,
    isReports,
    isLogin,
    isRegister,
    isIncExp,
    isAuthPage,
    pathname: location.pathname
  };
};
