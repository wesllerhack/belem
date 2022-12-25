import React from 'react'

import { FiTarget } from 'react-icons/fi'
import { GrCompliance, GrTask } from 'react-icons/gr'
import { GiWeight } from 'react-icons/gi'
import { MdAutoGraph } from 'react-icons/md'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Container, Content, Dados, Indicador, Percent } from './styles'

const DadosIndicador = () => {
  const percentage = 65;
  return (
    <Container>
      <h2>Dados dos Indicadores</h2>
      <Content>
        <Dados>
          <Indicador>
            <GrCompliance />
            <div>Realizado 2021</div>
          </Indicador>
          <Percent>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
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
              value={percentage}
              text={`${percentage}%`}
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
              value={percentage}
              text={`${percentage}%`}
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
              value={percentage}
              text={`${percentage}%`}
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
              value={percentage}
              text={`${percentage}%`}
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
