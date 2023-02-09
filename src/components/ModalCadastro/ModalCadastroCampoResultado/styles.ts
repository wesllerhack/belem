import styled, { css } from "styled-components";

import Modal from 'react-modal';
import Select from 'react-select';


export const ModalCampo = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 600px;
  height: 650px;
  background: #E8eaea;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  z-index: 999;
  overflow: hidden;
  box-shadow: 0px 0px 33px -5px rgba(0,0,0,0.94);
  border-radius: 12px;


  form {
    width: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 100%;



    .react-colorful {
    height: 100px;
    width: 350px;
    border: 4px solid #191b4e;
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

export const TitleModal = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    padding: 10px;
    color: #191b4e;


    button {
      cursor: pointer;
      border: none;
      background: transparent;

      svg {
        font-size: 30px;
      }
    }
`;

export const SelectModal = styled(Select)`
  position: relative;
  width: 100%;
  z-index: 10;
  font-weight: 600;
  color: #191b4e;

`;

export const Card = styled.div`
  margin: 32px 48px;
  width: 400px;
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

