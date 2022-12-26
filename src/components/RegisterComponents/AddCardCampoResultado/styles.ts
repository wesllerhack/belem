import styled from "styled-components";
import DatePicker from 'react-datepicker';


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 48px;
  margin-bottom: 40px;

  height: 160px;
  width: 100%;

  button {
    width: 30px;
    height: 30px;
    margin-right: 100px;
    background: transparent;
    border: none;

    svg {
    cursor: pointer;

    border-radius: 35%;
    font-size: 30px;
    background: blue;
    color: #fff;
    padding: 10px;
  }
  }



`;

