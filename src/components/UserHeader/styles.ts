import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 150px;
  justify-content: space-between;
`;


export const Notification = styled.div`
  svg {
    font-size: 2rem;
    color: #ccc;
    cursor: pointer;
  }

`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;


  img {
    width: 86px;
    border-radius: 35%;
  }
`;
export const User = styled.div`
  margin-right: 30px;

  span {
    display: flex;
    font-size: 0.9rem;
  }
`;

