import styled, { keyframes } from "styled-components";

const expandCenter = keyframes`
  from{
    width: 35vw;
  }
  to {
    width: calc(100vw - 380px);
  }
`;

const showPerfil = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
/*background: rgba(230, 230, 230, 0.911); */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #E6e6e6;
  height: calc(97vh - 20px);
  width: calc(100vw - 380px);
  position: relative;
  margin: 20px 0px;
  border-radius: 25px;
  overflow-y: auto;
  animation: ${expandCenter} 1s;

  h1 {
    width: 100%;
    display: flex;
    margin: 62px 0 0px 48px;
  }


  ::-webkit-scrollbar {
    display: none;
      width: 5px;
      border-radius: 20px;
  }
  ::-webkit-scrollbar-track {
      background-color: #444444;
  }

  ::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 20px;
  }

`;





