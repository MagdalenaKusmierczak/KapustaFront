import BalanceReports from "../../components/Balance/BalanceReports/BalanceReports";
import { ReportIncExp } from "../../components/Reports/ReportsIncExp/ReportIncExp";
import { Background } from "./Reports.styled";

const Reports = () => {
  return (
    <Background>
      <BalanceReports />
      <ReportIncExp />
    </Background>
  );
};
export default Reports;




