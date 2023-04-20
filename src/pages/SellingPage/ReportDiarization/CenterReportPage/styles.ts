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
  height: calc(97vh - 20px);
  width: calc(100vw - 380px);


  position: relative;
  margin: 20px 0px;
  border-radius: 25px;
  overflow-y: auto;
  animation: ${expandCenter} 1s;





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

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
`;

export const HeaderTitle = styled.div`
    display: flex;

    a{
      display: flex;
      align-items: center;
      justify-content: flex-start;

      margin-left: 28px;
      margin-top: 31px;
      text-decoration: none;

      svg  {
        font-size: 2rem;
      }
    }

  h1 {
    margin: 31px 0px 0px 48px;
  }

`;

export const User = styled.div`
  width: 35vw;
  right: 5px;
  top: 0;
  position: absolute;
  animation: ${showPerfil} 3s;
`;



export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 65px;
  margin-left: 32px;
  width: 100%;
  margin-top: 16px;

  select {
    position: relative;
    width: 280px;
    height: 40px;
    margin-left: -60px;
    background: transparent;
    border-radius: 12px;
    border: none;
    font-size: 1.15rem;
    padding-left: 10px;
    cursor: pointer;

    option {
      font-size: 1.15rem;
      margin-left: 55px;
    }

    :hover {
      border: 1px solid #000;
    }

    :focus {
      border: 1px solid #000;
    }

  }

  span {
    margin-left: 25px;
    cursor: pointer;
    svg {
      color: #25316D;
      font-size: 2rem;
    }
  }
`;

export const Line = styled.div`
  width: 100vw;
  border-bottom: 2px solid #ccc;
  margin-bottom: 25px;
`;


