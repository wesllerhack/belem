import styled, { keyframes } from "styled-components";

const showTableFooter = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  width: calc(100vw - 380px);
  border-bottom-left-radius : 25px;
  border-bottom-right-radius : 25px;
  height: 3.5rem;
  background: #25316D;
  color: #fff;
  animation: ${showTableFooter} 2s;

  div {
    display: flex;
    width: 90%;
    height: 100%;
    border-bottom-left-radius : 25px;
    border-bottom-right-radius : 25px;
    justify-content: space-between;
    margin: 0 50px;
    align-items: center;

    tfoot {
      display: flex;
      width: 100%;
      background: yellow;
      border-spacing: 1rem;
    }
  }

`;
