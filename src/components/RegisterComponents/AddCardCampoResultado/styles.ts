import styled, { css } from "styled-components";
import { shade } from 'polished';


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

    :disabled{

      svg {
        background: #D81819;

        :hover{
          background: #D81819;
          cursor: not-allowed;
        }
      }
    }



    svg {
    cursor: pointer;
    box-sizing: content-box;
    border-radius: 35%;
    font-size: 1.5rem;
    background: #0919e8;
    color: #fff;
    padding: 10px;
    transition: background-color 0.2s;

      &:hover {
      background: ${shade(0.2, '#102a73')};
      }
    }
  }



`;

