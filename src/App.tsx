import AppRoutes from './pages/app.routes'

import './global.css'
import AppProvider from './context'

function App() {

  return (
    <div>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </div>
  )
}

export default App
