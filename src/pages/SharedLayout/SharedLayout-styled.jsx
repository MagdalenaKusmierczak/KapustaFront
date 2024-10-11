import styled from "styled-components";

export const SharedLayoutContainer = styled.div`
  display: flex;
  box-shadow: 5px 10px 20px 0px #aab2c566;
  flex-direction: column;
  height: 100vh;
  width: 320px;
  margin: 0px auto;
  background-color: rgba(255, 255, 255, 1);

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
