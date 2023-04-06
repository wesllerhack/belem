import { opacify } from "polished";
import styled, { css, keyframes } from "styled-components";

const showCard = keyframes`
  0% {
    display: flex;
    opacity: 0;
    transform: translateX(500px);
  }
  30% {
    opacity: 0;
  }
  100% {

    opacity: 1;
  }
`;

const closeCard = keyframes`
  0% {
    opacity: 1;

  }
  30% {
    opacity: 0;
    transform: translateX(500px);
  }
  100% {
    opacity: 0;
    display: none;

  }
`;

interface Ppp {
  estado: Boolean;
}

export const CadastroOptions = styled.div<Ppp>`
  flex-direction: column;
  background: #fff;
  margin: 25px;
  padding: 15px;
  height: 65vh;
  width: 35vw;

  border-radius: 12px;
  box-shadow: 0px 0px 29px -2px rgba(0,0,0,0.36);


  ${props =>
    props.estado === true ? css`
      animation: ${showCard} 1s;
      display: flex;
    `:
      css`animation: ${closeCard} 1s;
        display: none;

    `
  }


  form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

  }

`;

export const InputContainer = styled.div`
display: flex;

  label {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 25px;
      margin-left: 10px;

    }
    input {
      border: 1px solid #ccc;
      border-radius: 8px;
      width: 100%;
      height: 30px;
      padding-left: 10px;
      margin-right: 25px;
    }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 35px;

  button {
    width: 8rem;
    padding: 6px 2rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }

`;



