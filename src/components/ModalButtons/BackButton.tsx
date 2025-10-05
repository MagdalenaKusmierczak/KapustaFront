import { useLocation } from "react-router";
import icons from "../../assets/icons.svg";
import {
  ButtonBack,
  ButtonBackWithText,
  ButtonBackText,
} from "./Buttons.styled";

export const BackButton = () => {
  const location = useLocation();

  let backLink;

  if (location.pathname === "/income/transactions") {
    backLink = "/income"; 
  } else if (location.pathname === "/expenses/transactions") {
    backLink = "/expenses"; 
  } 

  const isExpenses = location.pathname === "/expenses";

  const isIncome = location.pathname === "/income";

  const isTransactions =
    location.pathname === "/income/transactions" ||
    location.pathname === "/expenses/transactions";

  return (
    <>
      {isExpenses && (
        <ButtonBackWithText to="/expenses/transactions">
          <svg width="18" height="12">
            <use href={`${icons}#back-arrow`}></use>
          </svg>
          <ButtonBackText>TO TRANSACTIONS</ButtonBackText>
        </ButtonBackWithText>
      )}
      {isIncome && (
        <ButtonBackWithText to="/income/transactions">
          <svg width="18" height="12">
            <use href={`${icons}#back-arrow`}></use>
          </svg>
          <ButtonBackText>TO TRANSACTIONS</ButtonBackText>
        </ButtonBackWithText>
      )}
      {isTransactions && (
        <ButtonBack to={backLink}>
          <svg width="18" height="12">
            <use href={`${icons}#back-arrow`}></use>
          </svg>
        </ButtonBack>
      )}
    </>
  );
};
