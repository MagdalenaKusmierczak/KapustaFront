import styled from "@emotion/styled";

export const CategoryDiv = styled.div`
  position: relative;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    margin-left: 0;
    height: 44px;
  }
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 280px;
  max-height:44px;
  padding:15px 20px;
  border: 2px solid var(--secondary-color);
  border-bottom-right-radius: 20px;
  background-color: var(--primary-background);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 186px;
    border-radius: 0;
    border-color: var(--primary-background);
    background-color: var(--secondary-color);
  }
  @media screen and (min-width: 1280px) {
    width: 169px;
  }
  span {
    color: var(--ternary-color);
  }
  img {
    position: absolute;
    top: 17px;
    right: 20px;
  }
`;

export const SelectBody = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  // text-align: left;
  width: 280px;
  border: 2px solid var(--primary-background);
  border-bottom-right-radius: 20px;
  background-color: var(--secondary-color);
  box-shadow: var(--accent-shadow);
  @media screen and (min-width: 768px) {
    width: 186px;
    border-radius: 0;
  }
  @media screen and (min-width: 1280px) {
    width: 169px;
  }
`;

export const Element = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  height: 32px;

  cursor: pointer;
  color: var(--ternary-color);
  &:hover {
    color: var(--quinary-color);
    background-color: var(--primary-background);
  }
`;
