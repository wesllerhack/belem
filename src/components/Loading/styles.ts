import styled from "styled-components";

export const LoadingContainer = styled.div`
  background: #fff;;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  img {
    max-width: 30rem;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    span {
      font-size: 1.1rem;
    }
  }
`;
