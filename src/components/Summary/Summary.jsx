import { useSelector } from "react-redux";
import { useLocation } from "react-router";

import { Value, Table, Header, ListItem, Month } from "./Summary-styled";

import {
  selectIsLoading,
  selectExpensesSummary,
  selectIncomeSummary,
} from "../../redux/transactions/selectors";

const monthTranslate = (name) => {
  switch (name) {
    case "Январь":
      return "January";
    case "Февраль":
      return "February";
    case "Март":
      return "March";
    case "Апрель":
      return "April";
    case "Май":
      return "May";
    case "Июнь":
      return "June";
    case "Июль":
      return "July";
    case "Август":
      return "August";
    case "Сентябрь":
      return "September";
    case "Октябрь":
      return "October";
    case "Ноябрь":
      return "November";
    case "Декабрь":
      return "December";
    default:
      break;
  }
};

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
                <Month>{monthTranslate(el[0])}</Month>
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
