import styled from "@emotion/styled";

export const SharedLayoutContainer = styled.div`
  width: 320px;
  flex: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: var(--primary-small-shadow);
  background-color: var(--secondary-color);
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
