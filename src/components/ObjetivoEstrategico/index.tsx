import { useCallback, useEffect } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { Container, SliderOjetivo } from './styles'
import { useInContext } from '../../context/DataContext.js';
import './styles.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface arrowProps {
  className?: any;
  onClick?: any;
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

export const ObjetivoEstrategico = () => {
  const { objetivo, setIndicador, setDadosIndicador, setObjetivoAtual, objetivoAtual } = useInContext();

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
    setIndicador(info[index].crsindicador)
    setDadosIndicador(info[index].crsindicador[0].crs_dados)
  }, [])

  return (
    <Container>
      <h2>Objetivo Estratégico</h2>
      <div>
        {!!objetivo ?
          <SliderOjetivo afterChange={index => { setObjetivoAtual(index) }} {...settings} >

            {
              objetivo.map((value: any, index: number) =>
              (
                < div key={index} >
                  <h3>{value.descricao}{console.log(index, value)}</h3>
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
