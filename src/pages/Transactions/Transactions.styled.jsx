import styled from "styled-components";

export const StyledBg = styled.div`
  position: absolute;
  z-index: 0;
  top: 56px;
  margin: 0 auto;
  width: 320px;
  height: 258px;
  background-color: #f5f6fb;
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
  /* background-color: transparent; */
  z-index: 2;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 616px;
    margin: 0 auto;
    padding: 24px 40px 42px;
    background-color: #fff;
    border-radius: 0 30px 30px 30px;
    box-shadow: 0 10px 60px rgba(170, 178, 197, 0.2);
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
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    line-height: 14.06px;
    letter-spacing: 0.02em;
    text-align: center;
    display: block;
    width: 138px;
    height: 40px;
    padding: 12px 0;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    color: #000000;
    font-weight: 700;
    background-color: #fafbfd;
    border-radius: 18px 18px 0 0;
    :hover,
    :focus {
      color: #ff751d;
      background-color: #fefefe;
    }
    &.active {
      color: #ff751d;
      background-color: #fefefe;
    }
  }
`;
export const StyledTabsMobile = styled.div`
  z-index: 3;
  position: fixed;
  bottom: 0;
  display: flex;
  gap: 0;
  background-color: #ffffff;
  .TabMobile {
font-family: Roboto;
font-size: 12px;
font-weight: 700;
line-height: 14.06px;
letter-spacing: 0.02em;
display: block;
width: 160px;
padding: 20px 0;
text-decoration: none;
text-transform: uppercase;
text-align: center;
color: #000000;
font-weight: 700;
background-color: #f5f6fb;
    :hover,
    :focus {
      color: #ffffff;
      background-color: #FF751D;
    }
     &.active {
      color:  #FFFFFF;
      background-color: #FF751D;

  }
`;
