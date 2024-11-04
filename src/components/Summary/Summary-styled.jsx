import styled from "styled-components";

export const Table = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    width: 213px;
    height: 280px;
    background-color: #f5f6fb;
    display: inline-flex;
    flex-direction: column;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    line-height: 14.06px;
    letter-spacing: 0.02em;
    text-align: center;
    border-radius: 16px;
    border-bottom-left-radius: 0;
    margin-top: 40px;
    margin-left: 32px;
    overflow: hidden;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 0;
    margin-left: 74px;
  }
`;

export const Header = styled.li`
  font-weight: 700;
  letter-spacing: 0.02em;
  padding: 12px 0;
  color: #000;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px 21px;
  border-top: 2px solid #fff;

  @media screen and (min-width: 1200px) {
    padding: 12px 12px;
  }
`;

export const Month = styled.p`
  width: 84px;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  text-align: left;
`;

export const Value = styled.p`
  width: 84px;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  text-align: right;
`;
