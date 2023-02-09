import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 40px;
  border-radius: 4px;
  margin-top: 15px;


  input {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    border: 2px solid #191b4e;
    background: #fff;
    border-radius: 5px;
    color: #191b4e;
    font-size: 1em;
    font-weight: 600;
    transition: 0.1s;

    :focus {
      outline: none !important;
      border:2px solid #191b4e;
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


