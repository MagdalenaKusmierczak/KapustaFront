import BalanceReports from "../../components/Balance/BalanceReports/BalanceReports";
import ChartComponent from '../../components/Reports/Chart/Chart'
import { ReportIncExp } from "../../components/Reports/ReportsIncExp/ReportIncExp";
import { Background } from "./Reports.styled";



const Reports = () => {

  //Data
  const data = [
    { name: "Chicken", value: 1000 },
    { name: "Fuel", value: 800 },
    { name: "Beef", value: 600 },
  ];

  return (
    <Background>
      <BalanceReports />
      <ReportIncExp />
      <ChartComponent data={data} />
    </Background>
  );
};
export default Reports;
