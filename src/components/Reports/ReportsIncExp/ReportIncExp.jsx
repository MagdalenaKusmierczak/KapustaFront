import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectIncomeTotal,
  selectExpensesTotal,
} from "../../../redux/reports/selectors";
import Arrows from "../../MonthsPaginator/Arrows/Arrows";
// import { ReportsList } from "../ReportsList/ReportsList";
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

  const incomesTotal = useSelector(selectIncomeTotal);
  const expensesTotal = useSelector(selectExpensesTotal);

  const handleClick = () => {
    if (budget === "expenses") {
      setBudget("income");
      return;
    }
    setBudget("expenses");
  };

  return (
    <>
      <StatisticsWrapper>
        <StatisticsList>
          <StatisticsElement className="expenses">
            Expenses:
            <StatsExpenses>{expensesTotal ?? 0}.00</StatsExpenses>
          </StatisticsElement>
          <StatisticsElement className="income">
            Income:
            <StatsIncome>{incomesTotal ?? 0}.00</StatsIncome>
          </StatisticsElement>
        </StatisticsList>
      </StatisticsWrapper>
      <IconsBox>
        <Arrows onButtonClick={handleClick}>
          <BudgetName>{budget}</BudgetName>
        </Arrows>
        {/* <ReportsList onChange={budget} /> */}
      </IconsBox>
    </>
  );
};
