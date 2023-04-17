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
  background: #E6e6e6;
  height: calc(98vh - 20px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 20px 20px 0px 20px;
  border-radius: 35px;
  overflow-y: auto;
  //animation: ${expandCenter} 1s;


  div {

    img {
    display: flex;
    margin-top: -20px;
    width: 300px;
    height: 150px;
    display: flex;

  }
  }



  a{
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-left: 48px;
    margin-top: 31px;
    text-decoration: none;

    svg  {
      font-size: 3rem;
    }
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

export const User = styled.div`
  width: 35vw;
  right: 5px;
  position: absolute;
  animation: ${showPerfil} 3s;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
`;

export const TitlePage = styled.h1`
    display: flex;
    justify-content: center;
    color: #25316D;
    align-items: center;
    font-size: 4.0rem;
    width: 100%;
    position: absolute;
`;

export const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  height: 170px;
  margin-left: 0px;
  margin-right: 25px;
  width: 100%;
  max-width: 500px;


  select {
    width: 250px;
    background: green;

    height: 40px;
    background: transparent;
    border-radius: 12px;
    border: none;
    font-size: 1.5rem;
    padding-left: 0px;
    margin-right: 20px;

    option {
      font-size: 1.5rem;
      margin-left: 55px;
    }

    :hover {
      border: 1px solid #000;
    }

    :focus {
      border: 1px solid #000;
    }


  }
`;


