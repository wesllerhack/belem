import { BrowserRouter as Router } from 'react-router-dom';

import { AppRoutes } from './pages/app.routes'
import GlobalStyle from './global'
import { AppProvider } from './context'


export function App() {

  return (
    <>
      <Router>
        <AppProvider>
          <AppRoutes />
          <GlobalStyle />
        </AppProvider>
      </Router>
    </>
  )
}
