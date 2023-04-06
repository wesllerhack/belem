import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CardProgressBar from "@ramonak/react-progress-bar";
import { HexColorPicker } from "react-colorful";


import { CadastroOptions, InputContainer, ButtonContainer, Card, CardContent, CardTitle, CardPercentSquare, CardContentBar } from './styles';
export const CardCampoDeResultado = ({ verifyState }: any) => {
  const [color, setColor] = useState("#aabbcc");
  const [descricao, setDescricao] = useState(null);



  return (
    <CadastroOptions estado={verifyState}>
      <h2>Cadastro de Campo de Resultado</h2>
      <form action="">
        <InputContainer>
          <label htmlFor="">Descrição</label>
          <input
            placeholder="Digite a descrição"
            onChange={(event: any) => setDescricao(event.target.value)}
            type="text"
          />
        </InputContainer>


        <div className='picker'>
          <HexColorPicker color={color} onChange={setColor} />
        </div>

        <Card style={{ background: color }}>
          <CardContent >
            <CardTitle>
              {/* o Icone vai aqui */}
              <h2>{descricao}</h2>
            </CardTitle>
            <CardPercentSquare>
              <div>100%</div>
              <p>atingido</p>
            </CardPercentSquare>
          </CardContent>
          <CardContentBar>
            <CardProgressBar
              className="wrapper"
              completed={100}
              bgColor={'#fff'}
              baseBgColor={'#acacacc3'}
              labelColor={'#000'}
            />
          </CardContentBar>
        </Card>

        <ButtonContainer>
          <button type='submit'>Salvar</button>
          <button type='submit'>Cancelar</button>
        </ButtonContainer>

      </form >
    </CadastroOptions >

  );
};
