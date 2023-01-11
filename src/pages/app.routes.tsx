import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import MainPage from './MainPage'
import RegisterPage from './RegisterPage';
import ConsolidatedPage from './ConsolidatedPage';
import PerfilPage from './PerfilPage';

const AppRoutes = () => {

  return (
    <>
      <Router basename='/'>
        <Routes>
          <Route path="/dashboard" element={<MainPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/consolidado" element={<ConsolidatedPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default AppRoutes
