import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "./pages/PrivateRoute";
import { RestrictedRoute } from "./pages/RestrictedRoute";
import SharedLayout from "./pages/SharedLayout/SharedLayout";
const Reports = lazy(() => import("./pages/Reports/Reports"));
const Expenses = lazy(() => import("./pages/Transactions/Expenses/Expenses"));
const Income = lazy(() => import("./pages/Transactions/Incomes/Incomes"));
const Login = lazy(() => import("./pages/AuthPages/Login/Login"));
const RegisterPage = lazy(() => import("./pages//AuthPages/Register/Register"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<PrivateRoute component={<Expenses />} />} />

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
