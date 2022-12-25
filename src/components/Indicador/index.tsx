import React, { useContext } from 'react'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import { Container, SliderIndicador } from './styles'
import { InContext } from '../../context/DataContext.js';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface arrowProps {
  className?: any;
  onClick?: any;
}

const NextArrow = (props: arrowProps) => {

  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineArrowRight style={{ color: "black", fontSize: "30px" }} />
    </div>
  );
}
const PrevArrow = (props: arrowProps) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineArrowLeft style={{ color: "black", fontSize: "30px" }} />
    </div>
  );
}


const Indicador = () => {
  const { setIndicador, indicador } = useContext(InContext);



  const obj = [
    "% de atingimento do plano de vendas",
    "% de atingimento do CRS das lojas",
    "% de turnover ",
    "% E-NPS (Lideranças)",
    "% de efetivação no período de experiência",
    "% de despesas com pessoas"
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Container>
      <h2>Indicador</h2>
      <div>
        <SliderIndicador {...settings}>
          {indicador.map((value: any, index: any) => (
            <div key={index}>
              <h3>{value.descricao}</h3>
            </div>
          ))}
        </SliderIndicador>
      </div>
    </Container>
  )
}

export default Indicador
