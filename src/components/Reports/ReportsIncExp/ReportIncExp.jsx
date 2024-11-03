import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectReports } from "../../../redux/reports/selectors";
import { filteredDataAction } from "../../../redux/reportsQuery/reportsQuery.slice";
import Arrows from "../../MonthsPaginator/Arrows/Arrows";
import { ReportsList } from "../ReportsList/ReportsList";
import {
  StatisticsWrapper,
  StatisticsList,
  StatisticsElement,
  StatsIncome,
  StatsExpenses,
  BudgetName,
  IconsBox,
} from "./ReportIncExp.styled";


export const ReportIncExp = () => {
  const [budget, setBudget] = useState("expenses");

  const { reports } = useSelector(selectReports);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (budget === "expenses") {
      setBudget("income");
      dispatch(filteredDataAction([]));
      return;
    }
    setBudget("expenses");
    dispatch(filteredDataAction([]));
  };

  return (
    <>
      <StatisticsWrapper>
        <StatisticsList>
          <StatisticsElement className="expenses">
            Expenses:
            <StatsExpenses>
              {reports?.expenses?.expenseTotal ?? 0}.00
            </StatsExpenses>
          </StatisticsElement>
          <StatisticsElement className="income">
            Income:
            <StatsIncome>{reports?.incomes?.incomeTotal ?? 0}.00</StatsIncome>
          </StatisticsElement>
        </StatisticsList>
      </StatisticsWrapper>
      <IconsBox>
        <Arrows onButtonClick={handleClick}>
          <BudgetName>{budget}</BudgetName>
        </Arrows>
        <ReportsList onChange={budget} />
      </IconsBox>
    </>
  );
};
