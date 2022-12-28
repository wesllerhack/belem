import React, { useContext } from 'react'

import { FiTarget } from 'react-icons/fi'
import { GrCompliance, GrTask } from 'react-icons/gr'
import { GiWeight } from 'react-icons/gi'
import { MdAutoGraph } from 'react-icons/md'
import ModalCadastroDadosIndicador from '../../ModalCadastro/ModalCadastroDadosIndicador/index.js'


import { InContext } from '../../../context/DataContext.js';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Container, Content, Dados, Indicador, Percent } from './styles'

const DadosIndicador = () => {
  const { dadosIndicador } = useContext(InContext);

  console.log(dadosIndicador)
  if (dadosIndicador.length < 1) {
    dadosIndicador.realizado1 = 0
    dadosIndicador.realizado2 = 0
    dadosIndicador.meta = 0
    dadosIndicador.peso = 0
    dadosIndicador.ponderacao = 0
  }

  const percentage = 65;
  return (
    <Container>
      <p>
        <h2>Dados dos Indicadores</h2>
        <ModalCadastroDadosIndicador />
      </p>
      <Content>
        <Dados>
          <Indicador>
            <GrCompliance />
            <div>Realizado 2021</div>
          </Indicador>
          <Percent>
            <CircularProgressbar
              value={dadosIndicador.realizado1}
              text={`${dadosIndicador.realizado1}%`}
              styles={{
                text: {
                  fontSize: '30px',
                },
              }}
            />
          </Percent>
        </Dados>
        <Dados>
          <Indicador>
            <FiTarget />
            <div>Meta</div>
          </Indicador>
          <Percent>
            <CircularProgressbar
              value={dadosIndicador.meta}
              text={`${dadosIndicador.meta}%`}
              styles={{
                text: {
                  fontSize: '30px',
                },
              }}
            />
          </Percent>
        </Dados>
        <Dados>
          <Indicador>
            <GrTask />
            <div>Realizado</div>
          </Indicador>
          <Percent>
            <CircularProgressbar
              value={dadosIndicador.realizado2}
              text={`${dadosIndicador.realizado2}%`}
              styles={{
                text: {
                  fontSize: '30px',
                },
              }}
            />
          </Percent>
        </Dados>
        <Dados>
          <Indicador>
            <GiWeight />
            <div>Peso</div>
          </Indicador>
          <Percent>
            <CircularProgressbar
              value={dadosIndicador.peso}
              text={`${dadosIndicador.peso}%`}
              styles={{
                text: {
                  fontSize: '30px',
                },
              }}
            />
          </Percent>
        </Dados>
        <Dados>
          <Indicador>
            <MdAutoGraph />
            <div>Ponderado</div>
          </Indicador>
          <Percent>
            <CircularProgressbar
              value={dadosIndicador.ponderacao}
              text={`${dadosIndicador.ponderacao}%`}
              styles={{
                text: {
                  fontSize: '30px',
                },
              }}
            />
          </Percent>
        </Dados>
      </Content>
    </Container>
  )
}

export default DadosIndicador