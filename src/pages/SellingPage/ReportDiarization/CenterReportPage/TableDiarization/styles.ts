import styled, { keyframes } from "styled-components";
import { shade } from 'polished';

const showTable = keyframes`
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;


`;

export const ContainerButton = styled.div`
  border-radius: 12px;
  border: none
  margin-bottom: 50px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    cursor: pointer;
    width: 180px;
    padding: 10px;
    margin-left: 20px;
    background: green;
    border-radius: 8px;
    border: none;
    color: #fff;
  }
`;

export const ContainerTable = styled.div`
  display: fixed;
  padding: 20px;
  margin: 20px;
  margin-bottom: 25px;
  background: #25316D;
  border-radius: 10px;
  z-index: 0;
  animation: ${showTable} 2s;
  padding: 1rem;

  table {
    width: 100%;
    border-spacing: 0;
    background: #fff;
    border: 1px solid black;
    border-radius: 5px;

    tr {
      :last-child {
        td {
          border-bottom: 0;

        }
      }
    }
    th {
      //background: #ffcc29;
      background: #25316D;
      color: #fff;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
    tr {
      :nth-child(even) {
        background: #ffcc29;
      }
    }
  }
`;
