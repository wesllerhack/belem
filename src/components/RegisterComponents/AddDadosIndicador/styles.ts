import styled from "styled-components";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 230px;
  margin-top: 20px;

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      cursor: pointer;
      width: 20px;
      height: 20px;
      border-radius: 35%;
      font-size: 30px;
      background: blue;
      color: #fff;
      padding: 4px;
    }
  }

  h2 {
    white-space: pre;
    flex: 0;
    color: gray;
  }


`;

export const Content = styled.div`
  margin-top: 25px;
`;

export const Dados = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Indicador = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: center;


  svg {
    background: #ccc;
    border-radius: 30%;
    margin: 5px;
    padding: 5px;
    font-size: 50px;
  }
  div {
    font-size: 20px;
    margin-left: 35px;
  }
`;

export const Percent = styled.div`
  display: flex;
  font-size: 20px;
  height: 60px;
  width: 60px;
  margin-right: 50px;
  align-items: flex-end;
  justify-content: flex-end;
`;


