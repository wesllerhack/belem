import { opacify, shade } from "polished";
import Select from 'react-select';
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

  }
`;

interface Ppp {
  estado: Number;
}

export const CadastroOptions = styled.div<Ppp>`
  flex-direction: column;
  background: #fff;
  margin: 25px;
  padding: 10px 40px;
  height: 70vh;
  width: 45%;
  display: flex;

  border-radius: 12px;
  box-shadow: 0px 0px 29px -2px rgba(0,0,0,0.36);

  h2{
    color: #25316D;
    display: flex;
    align-items: center;
    justify-content: center;
  }



  ${props =>
    props.estado === 3 ? css`
      animation: ${showCard} 1s;
      display: flex;
    `:
      css`animation: ${closeCard} 1s;

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
flex-direction: column;
justify-content: space-between;
gap: 1rem;

  div{
    width: 100%;
    height: 40px;
    display: flex;

    select {
      width: 100%;
      border-radius: 8px;

      option {
        background-color: #fff;
        color: #333;
        font-size: 16px;
        padding: 16px;
        margin: 16px;
      }
    }

    div{
      flex-direction: column;
    }

    label {
      width: 130px;
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
      padding-left: 10px;

      :focus {
        border: 1px solid #000;
      }
    }
  }


`;

export const SelectModal = styled(Select)`
  display: flex;
  height: 150px;
  padding-top: 15px;

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

    background: #191b4e;
    color: yellow;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#25316D')};
    }
  }

`;



