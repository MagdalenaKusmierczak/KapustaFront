import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { useMatchMedia } from "../../../utils/hooks/useMatchMedia";
import { TransactionList } from "../../../components/TransactionsList/TransactionList";
import { TransactionListDesktop } from "../../../components/TransactionsList/TransactionListDesktop";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import {
  selectIncomeTransactions,
  selectBalance,
} from "../../../redux/transactions/selectors";
import { getIncome } from "../../../redux/transactions/operations";
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

export default function Incomes() {
  const location = useLocation();
  const isTransactions =
    location.pathname === "/income/transactions" ||
    location.pathname === "/expenses/transactions";

  const dispatch = useAppDispatch();

  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const allIncomes = useAppSelector(selectIncomeTransactions);
  const user = useAppSelector(selectIsLoggedIn);
  const balance = useAppSelector(selectBalance);
  const color = "green";

  useEffect(() => {
    if (user) dispatch(getIncome());
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
              {allIncomes}
              {color}
            </TransactionListDesktop>
          )}
          {isDesktop && <Summary />}
          {isMobile && !isTransactions && (
            <TransactionList>
              {allIncomes}
              {color}
            </TransactionList>
          )}
        </StyledTableAndSummaryDiv>
      </StyledFrame>
      {isTablet && <Summary />}
    </>
  );
}


