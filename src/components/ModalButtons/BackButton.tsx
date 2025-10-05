import { useRouteDetection } from "../../utils/hooks/useRouteDetection";
import icons from "../../assets/icons.svg";
import {
  ButtonBack,
  ButtonBackWithText,
  ButtonBackText,
} from "./Buttons.styled";

export const BackButton = () => {
  const { isExpenses, isIncome, isIncomeTransactions, isExpensesTransactions, isTransactions } = useRouteDetection();

  let backLink: string | undefined;

  if (isIncomeTransactions) {
    backLink = "/income"; 
  } else if (isExpensesTransactions) {
    backLink = "/expenses"; 
  }

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
      {isTransactions && backLink && (
        <ButtonBack to={backLink}>
          <svg width="18" height="12">
            <use href={`${icons}#back-arrow`}></use>
          </svg>
        </ButtonBack>
      )}
    </>
  );
};
