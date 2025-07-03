import styled from "@emotion/styled";

export const Picker = styled.div`
  .calendarIcon {
    width: 20px;
    height: 20px;
    fill: var(--quinary-color);
  }
  .datePicker {
    font-family: Roboto;
    display: flex;
    gap: 8px;
    align-items: center;
    height: 20px;
    font-size: 12px;
    font-weight: 900;
    line-height: calc(14 / 12);
    letter-spacing: 0.04em;
    color: var(--quinary-color);
    outline: none;
    border: none;
    cursor: pointer;
    :hover,
    :focus {
      color: var(--brand-color);
    }
    :hover .calendarIcon,
    :focus .calendarIcon {
      fill: var(--brand-color);
    }
  }
`;
