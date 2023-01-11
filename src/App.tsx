import AppRoutes from './pages/app.routes'

import GlobalStyle from './global'
import AppProvider from './context'

function App() {

  return (
    <div>
      <AppProvider>
        <AppRoutes />
        <GlobalStyle />

      </AppProvider>
    </div>
  )
}

export default App
