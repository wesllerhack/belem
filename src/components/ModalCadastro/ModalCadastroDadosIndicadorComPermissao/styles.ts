import styled from "styled-components";
import DatePicker from 'react-datepicker';

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
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  overflow: hidden;
  box-shadow: 0px 0px 33px -5px rgba(0,0,0,0.94);
  border-radius: 12px;


  form {
    flex: 1;
    width: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 250px;

    .picker {
      width: 100%;
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
    flex: 0;

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
  width: 350px;
  padding-top: 15px;

`;

export const DataInput = styled.div`
  width: 310px;
  height: 40px;
  margin-top: 15px;

  border: none;

  border-radius: 4px;
`;

export const DateSelector = styled(DatePicker)`
  width: 350px;
  border-radius: 6px;
  padding-left: 10px;
  height: 40px;
  font-size: 16px;
  border: 2px solid #191b4e;


    &:focus {
      outline: none;
    }
`
