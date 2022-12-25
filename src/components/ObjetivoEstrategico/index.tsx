import React, { useMemo, useState, useContext, useCallback } from 'react'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import { Container, SliderOjetivo } from './styles'
import { InContext } from '../../context/DataContext.js';


import './styles.css'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface arrowProps {
  className?: any;
  onClick?: any;
}

const SampleNextArrow = (props: arrowProps) => {

  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineArrowRight style={{ color: "black", fontSize: "30px" }} />
    </div>
  );
}
const SamplePrevArrow = (props: arrowProps) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineArrowLeft style={{ color: "black", fontSize: "30px" }} />
    </div>
  );
}


const ObjetivoEstrategico = () => {
  const { objetivo, setIndicador } = useContext(InContext);

  const handleIndicador = useCallback((info: any) => {
    setIndicador(info)
    console.log(info)
  }, []);

  const obj = [
    "Vendas do Varejo",
    "Dispor de Lideranças de Alta Performance",
    "Melhorar Clima Organizacional",
    "Retenção",
    "Custos com Pessoas"
  ]


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Container>
      <h2>Objetivo Estratégico</h2>
      <div>
        <SliderOjetivo {...settings}>
          {objetivo.map((value: any, index: any) => (
            <div key={index}>
              <h3 onClick={() => handleIndicador(value.id_indecador)}>{value.descricao}</h3>
            </div>
          ))}
        </SliderOjetivo>
      </div>
    </Container>
  )
}

export default ObjetivoEstrategico
