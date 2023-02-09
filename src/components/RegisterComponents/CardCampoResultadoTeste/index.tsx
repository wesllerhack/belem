import React, { useCallback, useContext, useEffect } from 'react'
import { FaStoreAlt } from 'react-icons/fa'
import { TbUsers } from 'react-icons/tb'
import { InContext } from '../../../context/DataContext.js';

import { useToast } from '../../../context/toast.js';

import ProgressBar from "@ramonak/react-progress-bar";

import { dados } from '../../../dados.js';


import { Container, Content, Title, PercentSquare, ContentBar } from './styles'
export const CardCampoResultados2 = () => {
  const { addToast } = useToast()
  const {
    setObjetivo,
    setIndicador,
    setDadosIndicador,
    setObjetivoAtual,
    setIndicadorAtual
  } = useContext(InContext);


  const handleObjetivo = useCallback((info: any) => {
    setObjetivoAtual(0)
    setObjetivo(info);
  }, []);

  const handleIndicador = useCallback((info: any) => {
    setIndicadorAtual(0)
    setIndicador(info);
  }, []);

  const handleDadosIndicador = useCallback((info: any) => {
    setDadosIndicador(info);
  }, []);

  return (
    <>
      {dados.map((value: any, index: any) => (

        <Container
          key={index}
          style={{ background: value.color }}
          onClick={() => {
            if (value.id_objetivo_estrategico && value.id_objetivo_estrategico[0].id_indicador && value.id_objetivo_estrategico[0].id_indicador[0].id_dado) {
              handleObjetivo(value.id_objetivo_estrategico)
              handleIndicador(value.id_objetivo_estrategico[0].id_indicador)
              handleDadosIndicador(value.id_objetivo_estrategico[0].id_indicador[0].id_dado)
            } else {
              addToast({
                type: 'error',
                title: 'Erro ao selecionar Campo de resultado',
                description: 'Falta realizar algum dos cadastros(Objetivo estratégico, Indicador ou Dados dos indicadores)'
              });
            }
          }}
        >
          <Content >
            <Title>
              {/* o Icone vai aqui */}
              <h2>{value.descricao}</h2>
            </Title>
            <PercentSquare>
              <div>68%</div>
              <p>atingido</p>
            </PercentSquare>
          </Content>
          <ContentBar>
            <ProgressBar
              className="wrapper"
              completed={68}
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
