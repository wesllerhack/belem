import styled from "styled-components";

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
  background: #E6e6e6;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 45px;
  border-bottom-left-radius: 45px;
  box-shadow: 0px 0px 33px -5px rgba(0,0,0,0.94);

  img {
    height: 50%;
    width: 350px;
    height: 180px;
    display: flex;
  }
  p {
    color: #3c3e7f;
    font-size: 70px;
    font-weight: 900;
    position: absolute;
   /* left: 110px;
    top: 130px;*/
    right: 140px;
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

    input {
      padding-left: 15px;
      border: none;
      border-radius: 8px;
      height: 2.3rem;
      width: 100%;
      min-width: 250px;
      margin-bottom: 25px;
    }

    button {
      border: none;
      background: red;
      border-radius: 8px;
      cursor: pointer;
      height: 2.4rem;
      width: 100%;
      min-width: 250px;
      margin-top: 25px;
    }
  }
`;


