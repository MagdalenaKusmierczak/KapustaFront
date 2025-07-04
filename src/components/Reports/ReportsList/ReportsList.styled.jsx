import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0%;
  padding: 0;
  &.incomeList {
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
`;

export const Item = styled.li`
  flex-grow: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc((100% - 20px) / 3);
  margin: 0%;
  padding: 20px 0;
  gap: 5px;
  border-bottom: 1px solid #e0e5eb;
  &.active {
    fill: #ff751d;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    fill: #ff751d;
  }
  @media screen and (min-width: 768px) {
    border: none;
    width: calc((100% - 64px) / 6);
  }
  &.income {
    max-width: 90px;
    flex-grow: 0;
  }
`;

export const ItemSvg = styled.svg`
  position: relative;
  display: flex;
`;

export const BgcSvg = styled.svg`
  position: absolute;
  top: 100px;
`;
