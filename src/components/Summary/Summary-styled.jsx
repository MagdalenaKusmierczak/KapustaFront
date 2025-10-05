import styled from "@emotion/styled";

export const Table = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    width: 213px;
    height: 280px;
    background-color: var(--primary-background);
    display: inline-flex;
    flex-direction: column;

    font-weight: 700;
    line-height: 14.06px;

    border-radius: 16px;
    border-bottom-left-radius: 0;
    margin-top: 40px;
    margin-left: 32px;
    overflow: hidden;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 0;
    margin-left: 74px;
  }
`;

export const Header = styled.li`
  font-weight: 700;
  padding: 12px 0;
  color: var(--primary-color);
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

  letter-spacing: 0.04em;
  // text-align: left;
`;

export const Value = styled.p`
  width: 84px;
  text-transform: uppercase;

  letter-spacing: 0.04em;
  text-align: right;
`;
