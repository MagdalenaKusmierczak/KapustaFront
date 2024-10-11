import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";

import { useMatchMedia } from "../../hooks/MediaQuery";
import { TransactionList } from "../../components/TransactionsList/TransactionList";
import { TransactionListDesktop } from "../../components/TransactionsList/TransactionListDesktop";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import {
  selectBalance,
  selectExpensesTransactions,
} from "../../redux/transactions/selectors";
import { getExpenses } from "../../redux/transactions/operations";

import Form from "../../components/Form/Form";
import Summary from "../../components/Summary/Summary";
import Balance from "../../components/Balance/MainBalance/Balance";
import { BackButton } from "../../components/ModalButtons/BackButton";

import {
  StyledBg,
  StyledFrame,
  StyledTableAndSummaryDiv,
  StyledTabsDesktop,
  StyledTabsMobile,
} from "./Expenses.styled";

// Expenses page
const Expenses = () => {
  //Location
  const location = useLocation();
  const isTransactions =
    location.pathname === "/income/transactions" ||
    location.pathname === "/expenses/transactions";

  //Media
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  // Dispatch
  const dispatch = useDispatch();
  // Selectors
  const allExpenses = useSelector(selectExpensesTransactions);
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);
  const color = "red";
  // Get expenses data
  useEffect(() => {
    if (user) {
      dispatch(getExpenses());
    }
  }, [dispatch, user, balance]);

  return (
    <>
      {isMobile && (
        <>
          <BackButton />
        </>
      )}
      {!isTransactions && <Balance />}
      <StyledBg />
      {isMobile && !isTransactions && (
        <StyledTabsMobile>
          <NavLink to="/expenses" className="TabMobile">
            expenses
          </NavLink>
          <NavLink to="/income" className="TabMobile">
            income
          </NavLink>
        </StyledTabsMobile>
      )}
      {isDesktop && (
        <StyledTabsDesktop>
          <NavLink to="/expenses" className="TabDesktop">
            expenses
          </NavLink>
          <NavLink to="/income" className="TabDesktop">
            income
          </NavLink>
        </StyledTabsDesktop>
      )}
      {isTablet && (
        <StyledTabsDesktop>
          <NavLink to="/expenses" className="TabDesktop">
            expenses
          </NavLink>
          <NavLink to="/income" className="TabDesktop">
            income
          </NavLink>
        </StyledTabsDesktop>
      )}
      <StyledFrame>
        <Form />
        <StyledTableAndSummaryDiv>
          {(isTablet || isDesktop) && (
            <TransactionListDesktop>
              {allExpenses}
              {color}
            </TransactionListDesktop>
          )}
          {isMobile && <TransactionList />}
          {isDesktop && <Summary />}
        </StyledTableAndSummaryDiv>
      </StyledFrame>
      {isTablet && <Summary />}
    </>
  );
};

export default Expenses;
