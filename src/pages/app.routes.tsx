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

import { RegisterPageGoal } from './SellingPage/RegisterPageGoal/'
import { ReportDiarization } from "./SellingPage/ReportDiarization";
import { RegisterUserPage } from "./ChoosePage/RegisterUser";

export const AppRoutes = () => {
  const { user } = useAuth();
  const { loading } = useInContext();


  if (!!loading) {
    return <><Loading /></>
  }

  // if (user) {
  //   console.log(user.id_nivel_permissao !== 6)
  // }


  return (
    <>
      <Routes >
        <Route path="/" element={<LoginPage />} />
        {
          !!user &&
            !!(user.id_nivel_permissao === 6) ?
            (<Route path="/painel" element={<SellingPageTV />} />) :

            (
              <>
                <Route path="/painel" element={<SellingPage />} />
                <Route path="/painel/cadastro" element={<RegisterPageGoal />} />
                <Route path="/painel/diarizacao" element={<ReportDiarization />} />
                <Route path="/pages" element={<ChoosePage />} />
                <Route path="/dashboard" element={<MainPage />} />
                {
                  !!user &&
                  !!(user.id_nivel_permissao <= 2) &&
                  (<Route path="/painel/cadastro" element={<RegisterUserPage />} />)
                }
                <Route path="/consolidado" element={<ConsolidatedPage />} />
                {
                  !!user &&
                  !!(user.id_nivel_permissao === 1) &&
                  (<Route path="/cadastro/usuario" element={<RegisterUserPage />} />)
                }
              </>
            )
        }
      </Routes>
    </>
  )
}
