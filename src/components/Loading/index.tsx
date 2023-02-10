import logo from '../../assets/logo.png'
import ReactLoading from 'react-loading'

import { LoadingContainer } from './styles'


export const Loading = () => {
  return (
    <LoadingContainer>
      <img src={logo} alt="" />
      <div>
        <ReactLoading type="spin" color="#25316D" height={100} width={100} />
        <span> Estamos preparando tudo para você, aguarde alguns instantes.</span>
      </div>
    </LoadingContainer>
  )
}

