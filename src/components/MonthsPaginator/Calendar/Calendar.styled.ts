import styled from "@emotion/styled";

export const Backdrop = styled.div`
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0%;
  background-color: var(--backdrop);
`;

export const CalendarBox = styled.div`
  position: absolute;
  background-color: var(--secondary-color);
  z-index: 10;
  width: 60%;
  border-radius: 20px;
  padding: 10px 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Month = styled.li`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.22;
  color: var(--quinary-color);
  &.active {
    color: var(--brand-color);
  }
`;

export const Year = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: var(--primary-color);
  padding: 0 10px;
`;
