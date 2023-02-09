import styled from "styled-components";
import { shade } from 'polished';


export const Container = styled.div`
  display: flex;
  max-width: 500px;
  min-width: 350px;
  padding-top: 20px;
  padding-bottom: 5px;

  button {
    background: #191b4e;
    width: 350px;
    height: 45px;
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
