import React from "react";
import { Outlet} from "react-router-dom";
import { useMatchMedia } from "../../hooks/MediaQuery";

import { StyledHomePage, StyledBackground } from "./MainPage-styled";
import Balance from "../../components/Balance/MainBalance/Balance";
import { TransactionList } from "../../components/TransactionsList/TransactionList";
import {
  TransactionsNavMobile,
  TransactionsNavDesktop,
} from "../../components/TransactionsNav/TransactionsNav";

// Home page
export default function MainPage() {

  // Hook
  const { isMobile } = useMatchMedia();

  return (
    <>
      <StyledBackground />
      <StyledHomePage>
        <Balance />

        {isMobile && <TransactionsNavMobile />}
        {!isMobile && <TransactionsNavDesktop />}
        {!isMobile && <Outlet />}
        {isMobile && <TransactionList />}
      </StyledHomePage>
    </>
  );
}
