import React, { useMemo, useState, useContext, useCallback, useEffect } from 'react'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import ModalCadastroObjetivoEstrategico from '../../ModalCadastro/ModalCadastroObjetivo';

import { Container, SliderOjetivo } from './styles'
import { InContext } from '../../../context/DataContext.js';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiCornerDownLeft } from 'react-icons/fi';

interface arrowProps {
  className?: any;
  onClick?: any;
}

interface induxProps {
  objetivoAtual?: number;
  setObjetivoAtual?: number;
}

const NextArrow = (props: arrowProps) => {

  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={() => {
        onClick()
      }} >
      <AiOutlineArrowRight style={{ color: "black", fontSize: "30px" }} />
    </div >
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

const ObjetivoEstrategico: React.FC = () => {
  const { objetivo, setIndicador, setDadosIndicador, setObjetivoAtual, objetivoAtual } = useContext(InContext);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  useEffect(() => {
    if (objetivo.length > 0) {
      handleIndicator(objetivo, objetivoAtual)

    }
  }, [objetivo, objetivoAtual])

  const handleIndicator = useCallback((info: any, index: any) => {
    setIndicador(info[index].id_indicador)
    setDadosIndicador(info[index].id_indicador[0].id_dado)

  }, [])

  return (
    <Container>
      <p>
        <h2>Objetivo Estratégico</h2>
        <ModalCadastroObjetivoEstrategico />
      </p>

      <div>
        {!!objetivo ?
          <SliderOjetivo afterChange={index => { setObjetivoAtual(index) }} {...settings} >

            {
              objetivo.map((value: any, index: any) =>
              (
                < div key={index} >
                  <h3 >{value.descricao}</h3>
                </div>
              )
              )
            }
          </SliderOjetivo>
          : <p>Nenhum campo de resultados selecionado</p>}
      </div >
    </Container >
  )
}

export default ObjetivoEstrategico
