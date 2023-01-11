import styled, { css, keyframes } from "styled-components";
import { shade } from 'polished';


interface ContainerProps {
  selected?: Number;
}

const animatedIcon = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const animatedIconDesapered = keyframes`
  from{
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;

  ul {
    list-style: none;

      li {
        display: flex;
        align-items: center;
        font-size: 1.05rem;
        margin-top: 30px;
        color: gray;
        cursor: pointer;

      a{
        display: flex;
        align-items: center;
        list-style: none;
        text-decoration: none;
        color: gray;

      }

    ${props =>
    props.selected === 1 &&
    css`
      &:nth-child(1){
            svg  {
            border-radius: 30%;
            background: #25316D;
            color: #fff;
            box-shadow: 0px 0px 8px 4px rgba(0,0,0,0.45);
            animation: ${animatedIcon} 0.3s;
          }

          span {
            color: #25316D;
            animation: ${animatedIcon} 0.3s;
          }
        }
    `
  }

    ${props =>
    props.selected === 2 &&
    css`
      &:nth-child(2){
            svg  {
            border-radius: 30%;
            background: #25316D;
            color: #fff;
            box-shadow: 0px 0px 8px 4px rgba(0,0,0,0.45);
            animation: ${animatedIcon} 0.3s;
          }

          span {
            color: #25316D;
            animation: ${animatedIcon} 0.3s;
          }
        }
    `
  }

${props =>
    props.selected === 3 &&
    css`
      &:nth-child(3){
            svg  {
            border-radius: 30%;
            background: #25316D;
            color: #fff;
            box-shadow: 0px 0px 8px 4px rgba(0,0,0,0.45);
            animation: ${animatedIcon} 0.3s;
          }

          span {
            color: #25316D;
            animation: ${animatedIcon} 0.3s;
          }
        }
      `
  }
${props =>
    props.selected === 4 &&
    css`
      &:nth-child(4){
            svg  {
            border-radius: 30%;
            background: #25316D;
            color: #fff;
            box-shadow: 0px 0px 8px 4px rgba(0,0,0,0.45);
            animation: ${animatedIcon} 0.3s;
          }

          span {
            color: #25316D;
            animation: ${animatedIcon} 0.3s;
          }
        }
      `
  }





      svg  {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          padding: 8px;
          box-sizing: content-box;
        }

        span {
          margin-left: 20px;
        }

    }
  }



`;
