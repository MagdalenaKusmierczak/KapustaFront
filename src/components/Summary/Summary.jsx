import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import {
  selectIsLoading,
  selectExpensesSummary,
  selectIncomeSummary,
} from "../../redux/transactions/selectors";
import Loader from "../../service/Loader/Loader";
import { Value, Table, Header, ListItem, Month } from "./Summary-styled";

const Summary = () => {
  const location = useLocation();
  const incomeData = useSelector(selectIncomeSummary);
  const expensesData = useSelector(selectExpensesSummary);
  const isLoading = useSelector(selectIsLoading);
  let data;

  if (
    location.pathname === "/income" ||
    location.pathname === "/income/transactions"
  ) {
    data = incomeData ? Object.entries(incomeData) : [];
  } else if (
    location.pathname === "/expenses" ||
    location.pathname === "/" ||
    location.pathname === "/expenses/transactions"
  ) {
    data = expensesData ? Object.entries(expensesData) : [];
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Table>
          <Header>SUMMARY</Header>
          {data.map((el) => {
            if (el[1] === "N/A") {
              return null;
            } else {
              return (
                <ListItem key={`${el[0]}${el[1]}`}>
                  <Month>{el[0]}</Month>
                  <Value>{el[1]}.00</Value>
                </ListItem>
              );
            }
          })}
        </Table>
      )}
    </>
  );
};

export default Summary;
