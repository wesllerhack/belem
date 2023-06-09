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
  align-items: space-between;
  justify-content: space-evenly;
  margin-bottom: 150px;
  width: 100%;
  animation: ${showPecent} 2s;


  h2 {
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
    font-size: 2rem;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 60%;
    font-size: 1.35rem;
  }
`;
/**
 * span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 60%;
    font-size: 1.25rem;
  }
 */
export const LoadingResults = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  span {
    font-size: 2rem;
  }
`;
