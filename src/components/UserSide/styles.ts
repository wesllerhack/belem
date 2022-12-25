import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex:0;
  width: 100%;

  align-items: center;
  margin: 0 0px;
  background: red;
`;


export const Notification = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

  svg {
    font-size: 36px;
    color: #ccc;
    cursor: pointer;
  }


  img {
    width: 86px;
    border-radius: 35%;
  }

`;
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


`;
export const User = styled.div`

  span {
    display: flex;
  }
`;

