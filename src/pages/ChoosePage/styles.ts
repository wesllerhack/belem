import styled from "styled-components";

export const ContainerChoice = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

`;

export const CenterContainer = styled.div`

    display: flex;
    flex: 2;
    align-items: center;
    justify-content: space-evenly;

    a{
    text-decoration: none;
    color: #25316D;


      div {
        display: flex;
        align-items: center;
        justify-content: center;

        box-shadow: 0px 0px 15px 5px rgba(37,49,109,0.41);


        padding: 20px;
        margin: 20px;
        background: #E6e6e6;
        border-radius: 12px;
        width: 30vw;
        height: 45vh;

        h2 {
          font-size: 3rem;
        }
      }
    }

`;

