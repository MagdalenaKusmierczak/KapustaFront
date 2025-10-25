import styled from "@emotion/styled";

export const StyledBg = styled.div`
  position: absolute;
  z-index: 0;
  top: 56px;
  margin: 0 auto;
  width: 320px;
  height: 258px;
  background-color: var(--primary-background);
  border-radius: 0 0 0 112px;
  @media screen and (min-width: 768px) {
    width: 768px;
    height: 583px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    border-radius: 0 0 0 112px;
  }
`;
export const StyledFrame = styled.div`
  z-index: 2;
  box-sizing: border-box;
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 616px;
    margin: 0 auto;
    padding: 24px 40px 42px;
    background-color: var(--secondary-color);
    border-radius: 0 30px 30px 30px;
    box-shadow: var(--secondary-shadow);
  }

  @media screen and (min-width: 1280px) {
    padding: 32px 32px 61px;
    width: 1098px;
    height: 579px;
    margin-bottom: 90px;
  }
`;

export const StyledTableAndSummaryDiv = styled.div`
  z-index: 2;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    margin-top: 48px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 60px;
  }
`;
export const StyledTabsDesktop = styled.div`
  display: flex;
  z-index: 2;
  @media screen and (min-width: 768px) {
    margin-left: 32px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 91px;
  }
  .TabDesktop {
    font-weight: 700;
    line-height: 14.06px;
    display: block;
    width: 138px;
    height: 40px;
    padding: 12px 0;
    text-transform: uppercase;
    color: var(--primary-color);
    font-weight: 700;
    background-color: var(--default-tab);
    border-radius: 18px 18px 0 0;
    :hover,
    :focus {
      color: var(--brand-color);
      background-color: var(--active-tab);
    }
    &.active {
      color: var(--brand-color);
      background-color: var(--active-tab);
    }
  }
`;
export const StyledTabsMobile = styled.div`
  z-index: 3;
  position: fixed;
  bottom: 0;
  display: flex;
  gap: 0;
  background-color: var(--secondary-color);
  .TabMobile {
    font-weight: 700;
    display: block;
    width: 160px;
    padding: 20px 0;
    text-transform: uppercase;
    text-align: center;
    color: var(--primary-color);
    font-weight: 700;
    background-color: var(--primary-background);
    :hover,
    :focus {
      color: var(--secondary-color);
      background-color: var(--brand-color);
    }
    &.active {
      color: var(--secondary-color);
      background-color: var(--brand-color);
    }
  }
`;
