import { useSelector } from "react-redux";
import { useLocation } from "react-router";

import { Value, Table, Header, ListItem, Month } from "./Summary-styled";

import {
  selectIsLoading,
  selectExpensesSummary,
  selectIncomeSummary,
} from "../../redux/transactions/selectors";

const Summary = () => {
  const location = useLocation();

  const incomeData = useSelector(selectIncomeSummary);
  const expensesData = useSelector(selectExpensesSummary);
  const isLoading = useSelector(selectIsLoading);
  let data;

  if (location.pathname === "/income" || "/income/transactions") {
    data = Object.entries(incomeData) ?? [];
  }
  if (location.pathname === "/expenses" || "/" || "/expenses/transactions") {
    data = Object.entries(expensesData) ?? [];
  }

  return (
    !isLoading && (
      <Table>
        <Header>SUMMARY</Header>
        {data?.map((el) => {
          if (el[1] === "N/A") {
            return false;
          } else {
            return (
              <ListItem key={`${el[0]}${el[1]}`}>
                <Month>{(el[0])}</Month>
                <Value>{el[1]}.00</Value>
              </ListItem>
            );
          }
        })}
      </Table>
    )
  );
};

export default Summary;
