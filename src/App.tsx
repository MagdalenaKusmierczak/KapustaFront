import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import type { AppDispatch } from "./redux/store";
import { fetchUser } from "./redux/auth/operations";
import { selectToken } from "./redux/auth/selectors";
import { setAuthHeader } from "./redux/auth/api";
import { PrivateRoute } from "./pages/PrivateRoute";
import { RestrictedRoute } from "./pages/RestrictedRoute";
import SharedLayout from "./pages/SharedLayout/SharedLayout";

const Reports = lazy(() => import("./pages/Reports/Reports"));
const Expenses = lazy(() => import("./pages/Transactions/Expenses/Expenses"));
const Income = lazy(() => import("./pages/Transactions/Incomes/Incomes"));
const Auth = lazy(() => import("./pages/AuthPage/AuthPage"));

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  const accessToken = useSelector(selectToken);

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    // Restore token to axios headers after rehydration
    setAuthHeader(accessToken);
    dispatch(fetchUser());
  }, [accessToken, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="/expenses" />} />
        <Route
          path="/login"
          element={<RestrictedRoute component={<Auth />} />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={<Auth />} />}
        />
        <Route
          path="/expenses"
          element={<PrivateRoute component={<Expenses />} />}
        />
        <Route 
          path="/income" 
          element={<PrivateRoute component={<Income />} />}
        />
        <Route
          path="/reports"
          element={<PrivateRoute component={<Reports />} />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
