import styled from "styled-components";
import DatePicker from 'react-datepicker';

interface prop {
  disabled: Boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  input {
    color: blue;
    cursor: pointer;
  }


`;

export const DateSelector = styled(DatePicker) <prop>`
    display: flex;
    height: 40px;

    align-items: center;
    font-weight: 600;
    font-size: 20px;
    border-radius: 4px;
    border: none;
    background: transparent;

    &:focus {
      outline: none;
    }
`
