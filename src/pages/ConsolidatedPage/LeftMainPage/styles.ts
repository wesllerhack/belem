import styled, { keyframes } from "styled-components";

const animatedLogo = keyframes`
  0% {
    transform: rotate(-20deg);
    z-index: 999;
  }
  50% {
    position: fixed;
    font-size: 600px;
    top: 0;
    transform: rotate(0deg);
    z-index: 999;
  }
  100% {
    transform: rotate(-20deg);
    z-index: 999;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  position: relative;
  left: 0;
  //background: pink;
  margin: 20px 20px;

  img {
    width: 250px;
    height: 130px;
    display: flex;
    margin-top: 40px;

  }

  p {
    color: #3c3e7f;
    font-size: 50px;
    font-weight: 900;
    position: absolute;
   /* left: 110px;
    top: 130px;*/
    left: 190px;
    top: 130px;
    transform: rotate(-20deg);
    animation: ${animatedLogo} 1.5s;

    font-smooth: always;
  }
`;

