
import { useLocation } from "react-router-dom";
import BalanceBar from './BalanceBar/BalanceBar';
import icons from "../../../assets/icons.svg";
import {
  BalanceSection,
  ReportBox,
  ReportIcon,
  ReportText,
  Link,
} from "./Balance.styled";

const Balance = () => {
  const location = useLocation();

  return (
    <BalanceSection>
      <BalanceBar />
      <ReportBox>
        <ReportText>Reports</ReportText>
        <Link to="/reports" state={{ from: location }}>
          <ReportIcon width="14px" height="14px">
            <use href={`${icons}#reports`}></use>
          </ReportIcon>
        </Link>
      </ReportBox>
    </BalanceSection>
  );
};

export default Balance;
