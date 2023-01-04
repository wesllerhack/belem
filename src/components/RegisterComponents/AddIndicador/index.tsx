import React, { useCallback, useContext, useEffect } from 'react'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'

import { Container, SliderIndicador } from './styles'
import { InContext } from '../../../context/DataContext.js';
import ModalCadastroIndicador from '../../ModalCadastro/ModalCadastroIndicador';

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


const Indicador = () => {
  const { objetivo, setDadosIndicador, indicador, setIndicadorAtual, indicadorAtual } = useContext(InContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    /* nextArrow: <SampleNextArrow />,
     prevArrow: <SamplePrevArrow />,*/
  };

  useEffect(() => {
    if (objetivo.length > 0) {
      handleIndicador(indicador, indicadorAtual)
    }
  }, [objetivo, indicadorAtual])

  const handleIndicador = useCallback((info: any, index: any) => {
    setDadosIndicador(info[index].id_dado)

  }, [])

  return (
    <Container>
      <p>
        <h2>Indicador</h2>
        <ModalCadastroIndicador />
      </p>
      <div>
        <SliderIndicador afterChange={index => { setIndicadorAtual(index) }}  {...settings}>
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
