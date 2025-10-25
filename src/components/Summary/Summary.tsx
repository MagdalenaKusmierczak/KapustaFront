import { useSelector } from "react-redux";
import { useRouteDetection } from "../../utils/hooks/useRouteDetection";
import {
  selectIsLoading,
  selectExpensesSummary,
  selectIncomeSummary,
} from "../../redux/transactions/selectors";
import Loader from "../../service/Loader/Loader";
import { Value, Table, Header, ListItem, Month } from "./Summary-styled";

const Summary = () => {
  const { isIncome, isExpenses } = useRouteDetection();
  const incomeData = useSelector(selectIncomeSummary);
  const expensesData = useSelector(selectExpensesSummary);
  const isLoading = useSelector(selectIsLoading);

  let data;

  if (isIncome) {
    data = incomeData ? Object.entries(incomeData) : [];
  } else if (isExpenses) {
    data = expensesData ? Object.entries(expensesData) : [];
  }

  function sortDescending(arr: [string, string | number | undefined][]) {
    return arr.slice().sort((a, b) => arr.indexOf(b) - arr.indexOf(a));
  }

  const sortedData = data ? sortDescending(data) : [];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Table>
          <Header>SUMMARY</Header>
          {sortedData.map((el: [string, string | number | undefined]) => {
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
