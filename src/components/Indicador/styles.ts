import styled from "styled-components";

import Slider from 'react-slick';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 130px;
  margin-top: 20px;
  //background: yellow;

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
    font-size: 24px;
    font-weight: 600;
    margin: 0 10px;
  }


`;

