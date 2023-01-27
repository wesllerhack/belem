import styled, { keyframes } from "styled-components";

const animatedLogo = keyframes`
  0% {
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(340deg);
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
    animation: ${animatedLogo} 1s;

    font-smooth: always;
  }
`;

