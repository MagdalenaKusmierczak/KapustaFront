import styled from "@emotion/styled";

/* ========== Mobile Styles ========== */
export const MobileList = styled.ul`
  width: 320px;
  height: auto;
  z-index: 1;
  margin-bottom: 55px;
  
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
  border-bottom: 1px solid var(--primary-background);
`;

export const ItemName = styled.p`
  font-weight: 700;
  letter-spacing: 0.04em;
`;

export const ItemNameCont = styled.div``;

export const ItemDateCont = styled.div`
  display: flex;
  gap: 20px;
`;

export const ItemDate = styled.p`
  font-size: 8px;
  line-height: 1.12;
  letter-spacing: 0.04em;
`;

export const ItemCategory = styled.p`
  font-size: 8px;
  line-height: 1.12;
  letter-spacing: 0.04em;
`;

export const SumCont = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
`;

export const Sum = styled.p`
  display: flex;
  align-items: center;
  font-weight: 700;
  letter-spacing: 0.04em;
  vertical-align: auto;
`;

/* ========== Desktop Styles ========== */
export const DesktopTable = styled.table`
  position: relative;
  border-collapse: collapse;
  display: none;
  flex-direction: column;
  width: 624px;
  height: 384px;
  
  @media screen and (min-width: 768px) {
    display: flex;
  }
  
  @media screen and (min-width: 1280px) {
    width: 746px;
  }
  
  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 2px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--primary-background);
    border-radius: 2px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--brand-color);
    border-radius: 2px;
  }
  
  th {
    width: 100%;
    height: 38px;
    background: var(--primary-background);
    border: none;
    font-weight: 700;
    line-height: 14px;
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
      height: 40px;
      
      &:not(:last-child) {
        border-bottom: 2px solid var(--primary-background);
      }
      
      td {
        position: relative;
        align-items: center;
        justify-content: center;
        flex: 1 0 calc(100% / 5);
        overflow-x: hidden;
        display: flex;
        height: 40px;
        overflow: hidden;
      }
    }
  }
`;

/* ========== Shared Styles ========== */
export const DeleteButton = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.7;
  }
`;

