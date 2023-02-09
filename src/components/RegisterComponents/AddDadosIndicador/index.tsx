import { useContext } from 'react'

import { FiTarget } from 'react-icons/fi'
import { GrCompliance, GrTask } from 'react-icons/gr'
import { GiWeight } from 'react-icons/gi'
import { MdAutoGraph } from 'react-icons/md'
import { ModalCadastroDadosIndicador } from '../../ModalCadastro/ModalCadastroDadosIndicador/index.js'


import { InContext } from '../../../context/DataContext.js';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Container, Content, Dados, Indicador, Percent } from './styles'
import { ModalCadastroDadosIndicadorComPermissao } from '../../ModalCadastro/ModalCadastroDadosIndicadorComPermissao/index.js'

export const AddDadosIndicador = () => {
  const { dadosIndicador, permiteCadastro } = useContext(InContext);


  const percentage = 65;
  return (
    <Container>
      <p>
        <h2>Dados dos Indicadores</h2>
        {!permiteCadastro ? <ModalCadastroDadosIndicadorComPermissao /> : <ModalCadastroDadosIndicador />}
      </p>
      <Content>
        <Dados>
          <Indicador>
            <GrCompliance />
            <div>Realizado 2021</div>
          </Indicador>
          <Percent>
            <CircularProgressbar
              value={0}
              text={`${0}%`}
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
              value={0}
              text={`${0}%`}
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
              value={0}
              text={`${0}%`}
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
              value={0}
              text={`${0}%`}
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
              value={0}
              text={`${0}%`}
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
