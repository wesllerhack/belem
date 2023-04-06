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
  width: 20vw;
  height: calc(97vh - 20px);
  position: relative;
  left: 0;
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

export const Logout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
  width: 100%;
  height: 50px;

  span {
    color: #191b4e;
    font-family: 'Roboto Slab';
    font-weight: 600;
    font-size: 1.2rem;
  }
  button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;

    svg {
    color: #25316D;
    cursor: pointer;
    font-size: 1.7rem;
  }
  }

`;

