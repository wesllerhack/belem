import styled from "styled-components";

import Modal from 'react-modal';
import Select from 'react-select';


export const ModalCampo = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 500px;
  height: 600px;
  background: #ccc;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  overflow: hidden;
  box-shadow: 0px 0px 33px -5px rgba(0,0,0,0.94);
  border-radius: 12px;


  form {
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 250px;



    .react-colorful {
    height: 100px;
    width: 310px;
    margin-bottom: 25px;
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
  width: 312px;
  z-index: 999;

`;

export const Card = styled.div`
  margin: 24px 48px;
  margin-top: 20px;
  width: 80%;
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

export const Content = styled.div`
  display: flex;
  width: auto;
  height: auto;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;
`;
export const Title = styled.div`
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
export const PercentSquare = styled.div`
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

export const ContentBar = styled.div`
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

