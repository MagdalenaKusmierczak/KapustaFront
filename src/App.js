import React, { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { fetchUser } from "./redux/auth/operations";
import { selectToken } from "./redux/auth/selectors";
import { PrivateRoute } from "./pages/PrivateRoute";
import { RestrictedRoute } from "./pages/RestrictedRoute";
import SharedLayout from "./pages/SharedLayout/SharedLayout";

const Reports = lazy(() => import("./pages/Reports/Reports"));
const Expenses = lazy(() => import("./pages/Transactions/Expenses/Expenses"));
const Income = lazy(() => import("./pages/Transactions/Incomes/Incomes"));
const Login = lazy(() => import("./pages/AuthPages/Login/Login"));
const RegisterPage = lazy(() => import("./pages//AuthPages/Register/Register"));

const App = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector(selectToken);

  // Shouldn't access token be in the dependencies for this useEffect?
  useEffect(() => {
    if (!accessToken) {
      return;
    }
    dispatch(fetchUser());
  },);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="/expenses" />} />
        <Route
          path="/login"
          element={<RestrictedRoute component={<Login />} />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegisterPage />} />}
        />
        <Route
          path="/expenses"
          element={<PrivateRoute component={<Expenses />} />}
        >
          <Route
            path="/expenses/transactions"
            element={<PrivateRoute component={<Expenses />} />}
          />
        </Route>
        <Route path="/income" element={<PrivateRoute component={<Income />} />}>
          <Route
            path="/income/transactions"
            element={<PrivateRoute component={<Income />} />}
          />
        </Route>
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
