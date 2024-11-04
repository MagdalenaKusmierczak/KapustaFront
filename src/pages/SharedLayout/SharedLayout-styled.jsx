import styled from "styled-components";

export const SharedLayoutContainer = styled.div`
  width: 320px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 10px 20px 0 #aab2c566;
  background-color: rgba(255, 255, 255, 1);
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
