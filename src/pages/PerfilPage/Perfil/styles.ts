import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45vw;
  padding: 20px 140px;
  height: 75vh;
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;

`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  width: 140px;
  align-self: center;


  img {
    width: 8rem;
    height: 8rem;
    border-radius: 30%;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 48px;
    height: 48px;
    background: #3c3e7f;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: none;
    transition: background-color 0.2;
    cursor: pointer;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #fbcb2c;
    }
    &:hover {
      background: ${shade(0.2, '#3c3e7f')};
    }
  }

`;
