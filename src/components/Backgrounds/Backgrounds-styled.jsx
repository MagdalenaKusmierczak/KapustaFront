import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 100%;
  height: 286px;
  margin: 0 auto;
  background-color: rgba(245, 246, 251, 1);
  background-image: url(../assets/icons.svg#single-kapusta-mobile-top);
  background-position: top 104 left 271px;
  border-bottom-left-radius: 40%;
  @media (min-width: 768px) {
    height: 526px;
    background-image: url(../assets/icons.svg#kapusta-rain);
    background-position: top 28px;
  }
  @media (min-width: 1280px) {
    min-width: 1232px;
  }
`;
