import styled, { css } from "styled-components";

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const LoginContainer = styled.div`
  background: #fff;
  display: flex;
  height: 100vh;
`;

export const Side = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;



  h3 {
    display: flex;
    font-size: 1.7rem;
    p {
      color: #3c3e7f;
    }
  }

  h2 {
    text-align: center;
    color: #3c3e7f;
    font-size: 3.7rem;
  }



`

export const Login = styled.div`
  padding: 0 200px;
  margin: 25px;
  position: relative;
  background: #E6e6e6;
 // background: #fff;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 45px;
  border-bottom-left-radius: 45px;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
  box-shadow: 0px 0px 33px -5px rgba(0,0,0,0.94);



  img {
    width: 420px;
    height: 220px;
    display: flex;
  }
  p {
    color: #3c3e7f;
    font-size: 70px;
    font-weight: 900;
    position: absolute;
    left: 440px;
    top: 200px;
    transform: rotate(-20deg);
    font-smooth: always;
  }



  form {
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      color: #191b4e;
      margin-bottom: 25px;
    }
/*
    input {
      padding-left: 15px;
      border: 2px solid #191b4e;
      border-radius: 8px;
      height: 2.3rem;
      width: 100%;
      min-width: 250px;
      margin-bottom: 20px;
      color: #191b4e;

      &:focus {
        transition: 0.3s;
        border: 2px solid #ffcc29;

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
*/
    > button {
      border: none;
      background: #191b4e;
      color: #ffcc29;
      border-radius: 8px;
      cursor: pointer;
      height: 2.4rem;
      width: 100%;
      min-width: 250px;
      margin-top: 20px;
    }
  }
`;
export const InputLogin = styled.div<InputProps>`
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
      color: #ff9000;
      border-color: #ffcc29;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
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

    button {
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
