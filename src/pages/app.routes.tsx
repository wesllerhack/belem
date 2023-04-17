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
import { SellingPage } from './SellingPage';
import { PerfilPage } from './PerfilPage';
import { useInContext } from "../context/DataContext";
import { Loading } from "../components/Loading";
import { ChoosePage } from "./ChoosePage";
import { useAuth } from "../context/auth";
import { SellingPageTV } from "./SellingPageTV";

export const AppRoutes = () => {
  const { user } = useAuth();
  const { loading } = useInContext();


  if (!!loading) {
    return <><Loading /></>
  }

  if (user) {
    console.log(user.id_nivel_permissao !== 6)
  }


  return (
    <>
      <Routes >
        <Route path="/" element={<LoginPage />} />
        {
          !!user &&
            !!(user.id_nivel_permissao === 6) ?
            (<Route path="/painel" element={<SellingPageTV />} />) :

            (<>
              <Route path="/painel" element={<SellingPage />} />
              <Route path="/pages" element={<ChoosePage />} />
              <Route path="/dashboard" element={<MainPage />} />
              <Route path="/cadastro" element={<RegisterPage />} />
              <Route path="/consolidado" element={<ConsolidatedPage />} /></>)
        }
      </Routes>
    </>
  )
}
