import styled, { keyframes } from "styled-components";

import Select from 'react-select'

const showPecent = keyframes`
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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 100px;
  width: 100%;
  height: 70%;
  animation: ${showPecent} 2s;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
  }
`;
