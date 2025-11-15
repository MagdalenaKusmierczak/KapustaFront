import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useMatchMedia } from "../../../utils/hooks/useMatchMedia";
import { useMobileView } from "../../../utils/hooks/useMobileView";
import { TransactionsList } from "../../../components/TransactionsList";
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
import type { AppDispatch } from "../../../redux/store";
import {
  StyledBg,
  StyledFrame,
  StyledTableAndSummaryDiv,
  StyledTabsDesktop,
  StyledTabsMobile,
} from "../Transactions.styled";

export default function Expenses() {
  const { isFormView, isListView, showForm, showList } = useMobileView();

  const dispatch = useDispatch<AppDispatch>();

  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const allExpenses = useSelector(selectExpensesTransactions);
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);

  useEffect(() => {
    if (user) dispatch(getExpenses());
  }, [dispatch, user, balance]);

  return (
    <>
      {isMobile && (
        <>
          <BackButton 
            onNavigate={isFormView ? showList : showForm}
            showText={isListView}
          />
        </>
      )}
      <Balance showReports={!isMobile || isListView} />
      <StyledBg />
      {isMobile && isListView && (
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
        {(!isMobile || isFormView) && <Form />}
        <StyledTableAndSummaryDiv>
          <TransactionsList transactions={allExpenses} type="expense" />
          {isDesktop && <Summary />}
        </StyledTableAndSummaryDiv>
      </StyledFrame>
      {isTablet && <Summary />}
    </>
  );
}


