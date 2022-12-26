import styled from "styled-components";

import Slider from 'react-slick';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 130px;
  margin-top: 20px;
  //background: yellow;

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      cursor: pointer;
      width: 20px;
      height: 20px;
      border-radius: 35%;
      font-size: 30px;
      background: blue;
      color: #fff;
      padding: 4px;
    }
  }

  h2 {
    flex: 0;
    color: gray;
  }

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-weight: 600;
  }
`;

export const SliderIndicador = styled(Slider)`
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

