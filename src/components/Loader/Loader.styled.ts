import styled from "@emotion/styled";

export const LoaderWrapper = styled.div`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backdrop);
  display: flex;
  justify-content: center;
  align-items: center;
`;
