import MonthsPaginator from "../../MonthsPaginator/MonthsPaginator";
import BalanceBar from "../BalanceBar/BalanceBar";
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
  MainPageLink,
  MainPageText,
  MainPageIcon,
  MobileWrapper,
} from "./BalanceReports.styled";

const BalanceReports = () => {
  return (
    <BalanceSection>
      <MainPageLink to="/">
        <MainPageIcon width="18px" height="12px">
          <use href={`${icons}#back-arrow`}></use>
        </MainPageIcon>
        <MainPageText>Main page</MainPageText>
      </MainPageLink>
      <MobileWrapper>
        <BalanceBar 
          styledComponents={{
            BalanceForm,
            BalanceBox,
            BalanceText,
            BalanceInput,
            BalanceButton,
          }}
        />
        <MonthsPaginator />
      </MobileWrapper>
    </BalanceSection>
  );
};
export default BalanceReports;
