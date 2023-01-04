import styled from "styled-components";


export const Container = styled.div`
  background: rgba(230, 230, 230, 0.911);
  height: calc(97vh - 20px);
  width: 35vw;
  position: relative;
  margin: 20px 0px;
  border-radius: 25px;
  overflow-y: auto;

  h1 {
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

export const SubHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 65px;
  margin-left: 48px;
  width: 100%;
  margin-top: 16px;
`;


