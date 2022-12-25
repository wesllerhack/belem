import styled from "styled-components";


export const Container = styled.div`
  margin: 24px 48px;
  padding: 10px;
  height: 150px;
  border-radius: 20px;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 0px 33px -5px rgba(0,0,0,0.94);
`;

export const Content = styled.div`
  display: flex;
  width: auto;
  height: auto;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 50px;
  }

  h2 {
    margin-left: 24px;
  }

`;
export const PercentSquare = styled.div`

  div {
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    height: 56px;
    width: 56px;
    color: #000;
    background: #fff;

    margin-top: 15px;
  }

  p {
    margin-top: 10px;
  }
`;
export const ContentBar = styled.div`
  margin: 0 24px;

  .wrapper {
}

.container {
  background-color: red;
}

.barCompleted {
  background-color: lightblue;
  width: 80%;
}

.label {
  font-size: 15px;
  color: green;
}
`;
