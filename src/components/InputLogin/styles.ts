import styled, { css } from 'styled-components';


interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}


export const InputContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  min-width: 250px;

  height: 40px;
  border: 2px solid #191b4e;
  border-radius: 10px;
  margin-top: 15px;
  background: #fff;


  ${props =>
    props.isFocused &&
    css`
      transition: 0.3s;
      border-color: #ffcc29;
    `}
  ${props =>
    props.isFilled &&
    css`
      transition: 0.3s;
    `}


  input {
    background: transparent;
    width: 100%;
    height: 35px;
    margin-left: 10px;
    margin-right: 5px;
    border: none;
    color: #191b4e;

    &:focus {
        outline: none;
        transition: 0.3s;

        &::placeholder {
          transition: 0.3s;
          color: #ccc;
        }

      }

      &::placeholder{
        color: #191b4e;
        font-size: 0.90rem;
      }


  }

   > svg {
    color: #191b4e;
    margin-left: 10px;
  }

    span {
      display: flex;
      align-items: center;
      margin-right: 10px;
      border: none;
      background: #fff;
      cursor: pointer;


      svg {

        font-size: 1rem;
      }
    }


`;
