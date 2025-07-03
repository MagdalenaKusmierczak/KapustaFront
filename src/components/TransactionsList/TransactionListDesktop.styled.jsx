import styled from "@emotion/styled";

export const TransactionTable = styled.table`
  position: relative;
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
  width: 624px;
  height: 384px;
  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    background: var(--primary-background);
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--brand-color)
    border-radius: 2px;
  }
  @media screen and (min-width: 1280px) {
    width: 746px;
  }
  th {
    width: 100%;
    height: 38px;
    background: var(--primary-background);
    border: none;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    border-collapse: collapse;
  }
  tr th:first-of-type {
    border-radius: 16px 0 0 0;
  }
  tr th:last-of-type {
    border-radius: 0 16px 0 0;
  }
  thead {
    justify-content: center;
    tr {
      justify-content: center;
      display: flex;
      th {
        align-items: center;
        justify-content: center;
        flex: 1 0 calc(100% / 5);
        display: flex;
      }
    }
  }
  tbody {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 344px;
    border-left: 2px solid var(--primary-background);
    border-top: none;
    border-bottom: 2px solid var(--primary-background);
    @media screen and (min-width: 768px) {
      min-height: 344px;
      max-height: 480px;
      height: auto;
    }
    tr {
      justify-content: center;
      display: flex;
      &:not(:last-child) {
        border-bottom: 2px solid var(--primary-background);
      }
      td {
        position: relative;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex: 1 0 calc(100% / 5);
        overflow-x: hidden;
        display: flex;
        height: 40px;
        overflow: hidden;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
