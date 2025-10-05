import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { NavLink } from "react-router-dom";
import { useMatchMedia } from "../../../utils/hooks/useMatchMedia";
import { useRouteDetection } from "../../../utils/hooks/useRouteDetection";
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
  const { isTransactions } = useRouteDetection();

  const dispatch = useAppDispatch();

  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const allExpenses = useAppSelector(selectExpensesTransactions);
  const user = useAppSelector(selectIsLoggedIn);
  const balance = useAppSelector(selectBalance);
  const color = "red";

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


