import styled from "styled-components";

export const SectionWrapper = styled.div`
  height: 493px;
  width: 280px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    box-shadow: 0px 10px 60px 0px #aab2c533;
    width: 704px;
    height: 422px;
    border-radius: 30px;
  }
  @media screen and (min-width: 1280px) {
    width: 1034px;
  }
`;

export const ChartWrapper = styled.div`
  width: 280px;
  height: 493px;
  @media screen and (min-width: 768px) {
    width: 638px;
    height: 422px;
    padding-block: 20px;
  }
  @media screen and (min-width: 1280px) {
    width: 756px;
    height: 422px;
    padding-block: 0px;
  }
`;
