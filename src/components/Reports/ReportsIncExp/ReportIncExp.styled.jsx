import styled from "@emotion/styled";

export const StatisticsWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  height: 85px;
  width: 280px;
  text-align: center;
  margin: 0 auto 30px auto;
  background-color: #ffffff;
  box-shadow: 5px 10px 20px 0 #aab2c566;
  border-radius: 20px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    height: 50px;
    width: 704px;
    border-radius: 30px;
    box-shadow: 0 10px 60px 0 #aab2c533;
  }
  @media screen and (min-width: 1280px) {
    width: 1035px;
  }
`;

export const StatisticsList = styled.ul`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  color: #52555f;
`;

export const StatisticsElement = styled.li`
  width: 140px;
  height: 70px;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  letter-spacing: 0.04em;
  justify-content: space-around;
  align-items: center;
  padding-top: 13px;
  padding-bottom: 10px;
  gap: 4px;
  padding-inline: 10px;
  &.income {
    border-left: 1px solid #e0e5eb;
  }
  @media screen and (min-width: 768px) {
    padding-block: 8px;
    flex-direction: row;
    width: 50%;
    height: 36px;
    gap: 0;
    &.income {
      padding-left: 20px;
      justify-content: flex-start;
    }
    &.expenses {
      padding-right: 20px;
      justify-content: flex-end;
    }
  }
`;

export const StatsIncome = styled.span`
  color: green;
  display: inline-block;
  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
`;

export const StatsExpenses = styled.span`
  color: red;
  display: inline-block;
  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
`;

export const BudgetName = styled.p`
  width: 120px;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;
`;

export const IconsBox = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    padding: 20px 40px;
    margin-top: 32px;
    border-radius: 30px;
    background-color: #fff;
  }
  @media screen and (min-width: 1280px) {
    padding: 20px 205px;
  }
`;
