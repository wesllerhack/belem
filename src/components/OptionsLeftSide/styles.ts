import styled, { css } from "styled-components";

interface ContainerProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;


  ul {
    list-style: none;

  }

`;
export const OptionsLi = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-top: 30px;
  color: gray;
  cursor: pointer;


  &:first-child{
      svg  {
      border-radius: 30%;
      background: #25316D;
      color: #fff;
      box-shadow: 0px 0px 8px 4px rgba(0,0,0,0.45);
    }

    span {
      color: #25316D;
    }
  }

  svg  {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      padding: 8px;
    }

    span {
      margin-left: 20px;
    }

`;
