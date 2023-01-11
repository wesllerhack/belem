import styled from "styled-components";
import { shade } from 'polished';


export const Container = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 5px;

  button {
    background: #25316D;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 8px;
    color: yellow;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
    background: ${shade(0.2, '#25316D')};
  }
  }
`;
