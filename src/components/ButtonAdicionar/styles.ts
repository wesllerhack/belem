import styled from "styled-components";
import { shade } from 'polished';


export const Container = styled.div`
  display: flex;
  padding-bottom: 5px;

  button {
    background: #fbcb2c;
    width: 310px;
    height: 40px;
    border: none;
    border-radius: 8px;
    color: #25316D;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
    background: ${shade(0.2, '#d5ad3b')};
  }
  }
`;
