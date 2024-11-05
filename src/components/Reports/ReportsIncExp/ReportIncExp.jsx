import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectIncomeTotal,
  selectExpensesTotal,
  selectExpensesData,
  selectIncomeData,
} from "../../../redux/reports/selectors";
import ChartComponent from "../Chart/Chart";
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
  const [data, setData] = useState([]);

  const incomesTotal = useSelector(selectIncomeTotal);
  const expensesTotal = useSelector(selectExpensesTotal);
  const incomesData = useSelector(selectIncomeData);
  const expensesData = useSelector(selectExpensesData);

  useEffect(() => {
    if (budget === "expenses") {
      setData(expensesData);
    } else {
      setData(incomesData);
    }
  }, [budget, expensesData, incomesData]);

  const handleClick = () => {
    setBudget((prevBudget) =>
      prevBudget === "expenses" ? "income" : "expenses"
    );
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
        <ReportsList onChange={budget} data={data} />
      </IconsBox>
      <ChartComponent data={data} />
    </>
  );
};
