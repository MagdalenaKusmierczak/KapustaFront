import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { useMatchMedia } from "../../../hooks/MediaQuery";
import { TransactionList } from "../../../components/TransactionsList/TransactionList";
import { TransactionListDesktop } from "../../../components/TransactionsList/TransactionListDesktop";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import {
  selectExpensesTransactions,
  selectBalance,
} from "../../../redux/transactions/selectors";
import { getExpenses } from "../../../redux/transactions/operations";
import Summary from "../../../components/Summary/Summary";
import Balance from "../../../components/Balance/MainBalance/Balance";
import { BackButton } from "../../../components/ModalButtons/BackButton";
import Form from "../../../components/Form/Form";
import {
  StyledBg,
  StyledFrame,
  StyledTableAndSummaryDiv,
  StyledTabsDesktop,
  StyledTabsMobile,
} from "../Transactions.styled";

export default function Expenses() {
  const location = useLocation();

  // What if it's the parent component that decides which component to show?
  // You can pass a prop to the child component to determine which version to render instead of using the location directly here
  const isTransactions =
    location.pathname === "/income/transactions" ||
    location.pathname === "/expenses/transactions";

  const dispatch = useDispatch();

  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const allExpenses = useSelector(selectExpensesTransactions);
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);
  const color = "red"; // Why is this needed in such form here?

  useEffect(() => {
    if (user) dispatch(getExpenses());
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
          {isMobile && !isTransactions && (
            <TransactionList>
              {allExpenses}
              {color}
            </TransactionList>
          )}
          {isDesktop && <Summary />}
        </StyledTableAndSummaryDiv>
      </StyledFrame>
      {isTablet && <Summary />}
    </>
  );
}
