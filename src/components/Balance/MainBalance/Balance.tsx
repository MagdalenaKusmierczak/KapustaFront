
import { useLocation } from "react-router-dom";
import BalanceBar from '../BalanceBar/BalanceBar';
import {
  BalanceForm,
  BalanceBox,
  BalanceText,
  BalanceInput,
  BalanceButton,
} from "../BalanceBar/BalanceBar.styled";
import icons from "../../../assets/icons.svg";
import {
  BalanceSection,
  ReportBox,
  ReportIcon,
  ReportText,
  Link,
} from "./Balance.styled";

interface BalanceProps {
  showReports?: boolean;
}

const Balance = ({ showReports = true }: BalanceProps) => {
  const location = useLocation();

  return (
    <BalanceSection>
      <BalanceBar 
        styledComponents={{
          BalanceForm,
          BalanceBox,
          BalanceText,
          BalanceInput,
          BalanceButton,
        }}
      />
      {showReports && (
        <ReportBox>
          <ReportText>Reports</ReportText>
          <Link to="/reports" state={{ from: location }}>
            <ReportIcon width="14px" height="14px">
              <use href={`${icons}#reports`}></use>
            </ReportIcon>
          </Link>
        </ReportBox>
      )}
    </BalanceSection>
  );
};

export default Balance;
