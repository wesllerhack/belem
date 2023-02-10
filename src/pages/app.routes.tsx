import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { LoginPage } from "./Login";
import { MainPage } from './MainPage'
import { RegisterPage } from './RegisterPage';
import { ConsolidatedPage } from './ConsolidatedPage';
import { PerfilPage } from './PerfilPage';
import { useInContext } from "../context/DataContext";
import { Loading } from "../components/Loading";

export const AppRoutes = () => {

  const { loading } = useInContext();

  if (!!loading) {
    return <><Loading /></>
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<MainPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/consolidado" element={<ConsolidatedPage />} />
        {/*<Route path="/perfil" element={<PerfilPage />} />*/}
      </Routes>
    </>
  )
}
