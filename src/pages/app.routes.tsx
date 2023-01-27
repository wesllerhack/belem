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
import LoginPage from "./Login";

const AppRoutes = () => {

  return (
    <>
      <Router basename='/'>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
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
