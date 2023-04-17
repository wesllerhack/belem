import { opacify, shade } from "polished";
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
  estado: number;
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
    props.estado === 1 ? css`
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



      .react-colorful {
      display: flex;
      justify-content: center;
      height: 75px;
      width: 100%;
      border-radius: 8px;
    }

    .react-colorful__saturation {
      border-radius: 4px 4px 0 0;
    }

    .react-colorful__hue {
      height: 20px;
      border-radius: 0 0 4px 4px;
    }

    .react-colorful__hue-pointer {
      width: 12px;
      height: 15px;
      border-radius: 0;
    }




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
      height: 35px;
      padding-left: 10px;
      margin-right: 25px;

      :focus {
        border: 1px solid #000;
      }
    }
`;
/*
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

*/

export const Card = styled.div`
  width: 100%;
  padding: 10px;
  height: 150px;
  border-radius: 20px;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #fff;
  box-shadow: 0px 0px 33px -5px rgba(0,0,0,0.94);
`;

export const CardContent = styled.div`
  display: flex;
  width: auto;
  height: auto;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;
`;
export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 50px;
  }

  h2 {
    margin-left: 24px;
  }

`;
export const CardPercentSquare = styled.div`
  margin-left: 15px;

  div {
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    height: 56px;
    width: 56px;
    color: #000;
    background: #fff;
    margin-top: 15px;
  }

  p {
    margin-top: 10px;
  }
`;

export const CardContentBar = styled.div`
  margin: 0 24px;

  .wrapper {
}

.container {
  background-color: red;
}

.barCompleted {
  background-color: lightblue;
  width: 80%;
}

.label {
  font-size: 15px;
  color: green;
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
