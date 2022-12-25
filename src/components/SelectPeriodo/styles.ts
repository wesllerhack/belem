import styled from "styled-components";
import DatePicker from 'react-datepicker';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 48px;
  height: 160px;
  width: 100%;

  input {
    margin-top: 16px;
    color: blue;
    cursor: pointer;
  }


`;

export const DateSelector = styled(DatePicker)`
    font-weight: 600;
    font-size: 20px;
    border-radius: 4px;
    border: none;
    background: transparent;

    &:focus {
      outline: none;
    }
`
