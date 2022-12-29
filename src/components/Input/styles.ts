import styled from "styled-components";

export const Container = styled.div`
  width: 289px;
  height: 32px;
  margin-top: 15px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-radius: 4px;


  input {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: #fff;
    border-radius: 5px;
    outline: none;
    color: #092f58;
    font-size: 1em;
    transition: 0.1s;

    :focus {
      outline: none !important;
      border:2px solid #092f58;
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    [type=number] {
        -moz-appearance:textfield; /* Firefox */
    }

  }

`;


