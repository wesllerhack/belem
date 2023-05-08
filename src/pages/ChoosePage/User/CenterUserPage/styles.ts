import { shade } from "polished";
import styled, { keyframes } from "styled-components";

const expandCenter = keyframes`
  from{
    width: 35vw;
  }
  to {
    width: calc(100vw - 380px);
  }
`;

const showPerfil = keyframes`
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
/*background: rgba(230, 230, 230, 0.911); */
export const Container = styled.div`

  background: #E6e6e6;
  height: calc(97vh - 20px);
  width: calc(100vw - 380px);

  position: relative;
  margin: 20px 0px;
  border-radius: 25px;
  overflow-y: auto;
  animation: ${expandCenter} 1s;

  h1 {
    margin: 62px 0 0px 48px;
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

export const HeaderTitle = styled.div`
    display: flex;
    align-items: center;

    a{
      display: flex;
      align-items: center;
      justify-content: flex-start;

      margin-left: 28px;
      margin-top: 31px;
      text-decoration: none;

      svg  {
        font-size: 2rem;
      }
    }

  h1 {
    margin: 31px 0px 0px 48px;
  }

`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: row;

`;

export const CadastroOptions = styled.div`
  background: #fff;
  margin: 25px;
  padding: 15px;
  height: 70vh;
  width: 50%;
  animation: ${showPerfil} 2s;


  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0px 0px 29px -2px rgba(0,0,0,0.36);
  overflow-y: auto;



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



  h2{
    color: #25316D;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
  }

  form {
    margin: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin-bottom: 100px;


  }
`



export const User = styled.div`
  width: 35vw;
  right: 5px;
  top: 0;
  position: absolute;
  animation: ${showPerfil} 3s;
`;

export const Line = styled.div`
  width: 100vw;
  border-bottom: 2px solid #ccc;
  margin-top: 75px;
  margin-bottom: 10px;
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 1.5rem;

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
      justify-content: flex-start;
      margin-right: 15px;
      margin-left: 10px;
      white-space: wrap;

    }
    input {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #ccc;
      border-radius: 8px;
      width: 100%;
      padding-left: 10px;

      :focus {
        border: 1px solid #000;
      }


    }

    span  {
      cursor: pointer;
      display: flex;
      align-items: center;
      margin-right: 25px;

      svg {

      }
    }
  }


`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top:40px;

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





