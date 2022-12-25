import React, { useCallback, useContext, useEffect } from 'react'
import { FaStoreAlt } from 'react-icons/fa'
import { TbUsers } from 'react-icons/tb'
import { InContext } from '../../context/DataContext.js';


import ProgressBar from "@ramonak/react-progress-bar";

import dados from '../../dados.js';


import { Container, Content, Title, PercentSquare, ContentBar } from './styles'
const CardCampoResultados = () => {
  const { setObjetivo, setIndicador, dadosIndicador, setDadosIndicador } = useContext(InContext);


  const handleObjetivo = useCallback((info: any) => {
    setObjetivo(info);
  }, []);

  const handleIndicador = useCallback((info: any) => {
    setIndicador(info);
  }, []);

  const handleDadosIndicador = useCallback((info: any) => {
    setDadosIndicador(info);
  }, []);

  return (
    <>
      {dados.map((value: any, index: any) => (

        <Container
          style={{ background: value.color }}
          onClick={() => {
            handleObjetivo(value.id_objetivo_estrategico)
            handleIndicador(value.id_objetivo_estrategico[0].id_indicador)
            handleDadosIndicador(value.id_objetivo_estrategico[0].id_indicador[0].id_dado)
          }}
        >
          <Content >
            <Title>
              {/* o Icone vai aqui */}
              <h2>{value.descricao}</h2>
            </Title>
            <PercentSquare>
              <div>69%</div>
              <p>atingido</p>
            </PercentSquare>
          </Content>
          <ContentBar>
            <ProgressBar
              className="wrapper"
              completed={69}
              bgColor={'#fff'}
              baseBgColor={'#acacacc3'}
              labelColor={'#000'}
            />
          </ContentBar>
        </Container>
      ))

      }
      {/*
      <Container style={{ background: 'blue' }}>
        <Content >
          <Title>
            <TbUsers />
            <h2>Patrimônio humano</h2>
          </Title>
          <PercentSquare>
            <div>40%</div>
            <p>atingido</p>
          </PercentSquare>
        </Content>
        <ContentBar>
          <ProgressBar
            className="wrapper"
            completed={40}
            bgColor={'#fff'}
            baseBgColor={'#acacacc3'}
            labelColor={'#000'}
          />
        </ContentBar>
      </Container>

      <Container style={{ background: 'green' }}>
        <Content >
          <Title>
            <TbUsers />
            <h2>Processos de gente e gestão</h2>
          </Title>
          <PercentSquare>
            <div>90%</div>
            <p>atingido</p>
          </PercentSquare>
        </Content>
        <ContentBar>
          <ProgressBar
            className="wrapper"
            completed={90}
            bgColor={'#fff'}
            baseBgColor={'#acacacc3'}
            labelColor={'#000'}
          />
        </ContentBar>
      </Container>*/}
    </>
  )
}

export default CardCampoResultados
