import styled from "@emotion/styled";

export const SectionWrapper = styled.div`
  height: 493px;
  width: 280px;
  background: var(--secondary-color);
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    box-shadow: var(--primary-shadow);
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
    padding-block: 0;
  }
`;

export const Info = styled.p`
  font-weight: 700;
  font-size: 14px;

  color: var(--primary-color);
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
