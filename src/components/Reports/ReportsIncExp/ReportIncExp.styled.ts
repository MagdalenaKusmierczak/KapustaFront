import styled from "@emotion/styled";

export const StatisticsWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  height: 85px;
  width: 280px;

  margin: 0 auto 30px auto;
  background-color: var(--secondary-color);
  box-shadow: var(--primary-small-shadow);
  border-radius: 20px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    height: 50px;
    width: 704px;
    border-radius: 30px;
    box-shadow: var(--primary-shadow)
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
  color: var(--quinary-color);
`;

export const StatisticsElement = styled.li`
  width: 140px;
  height: 70px;

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
    border-left: 1px solid var(--accent-line);
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
  color: var(--income-color);
  display: inline-block;
  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
`;

export const StatsExpenses = styled.span`
  color: var(--expense-color);
  display: inline-block;
  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
`;

export const BudgetName = styled.p`
  width: 120px;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;

  text-transform: uppercase;
  color: var(--primary-color);
`;

export const IconsBox = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    padding: 20px 40px;
    margin-top: 32px;
    border-radius: 30px;
    background-color: var(--secondary-color);
  }
  @media screen and (min-width: 1280px) {
    padding: 20px 205px;
  }
`;
