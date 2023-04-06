import styled, { keyframes, css } from "styled-components";

interface verifyAnimaitonProps {
  verify: Boolean;
}

const retractCenter = keyframes`
  from{
    width: 75vw;
  }
  to {
    width: 35vw;
  }
`;

export const Container = styled.div<verifyAnimaitonProps>`
  background: #E6e6e6;
  height: calc(97vh - 20px);
  width: 35vw;
  position: relative;
  margin: 20px 0px;
  border-radius: 25px;
  overflow-x: auto;
  z-index: 1;
  ${props =>
    props.verify === true &&
    css`
      animation: ${retractCenter} 1s;
    `
  }

  ::-webkit-scrollbar {
    display: none;
      width: 5px;
      border-radius: 20px;
  }
  ::-webkit-scrollbar-track {
      background-color: #444444;
  }

  ::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 20px;
  }

`;

