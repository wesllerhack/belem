import styled from "styled-components";
import { shade } from "polished";
import Slider from 'react-slick';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 130px;
  margin-top: 10px;

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      margin-right: 10px;
      width: 20px;
      height: 20px;
      background: transparent;
      border: none;

      :disabled{

        svg {
          background: #D81819;

          :hover{
            background: #D81819;
            cursor: not-allowed;
          }
        }
}


      svg {
        cursor: pointer;
        width: 20px;
        height: 20px;
        border-radius: 35%;
        font-size: 30px;
        background: blue;
        color: #fff;
        padding: 4px;
        font-size: 1rem;
        box-sizing: content-box;
        transition: background-color 0.2s;

        &:hover {
        background: ${shade(0.2, '#102a73')};
        }
      }
    }

  }
  h2 {
    white-space: pre;
    flex: 0;
    color: gray;
  }



  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    font-weight: 600;
  }
`;

export const SliderOjetivo = styled(Slider)`
  width: 100%;

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 600;
    margin: 0 10px;
  }


`;

