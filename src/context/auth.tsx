import React, {
  createContext,
  useCallback,
  useState,
  PropsWithChildren,
  useContext,
  useEffect,
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { api } from '../services/api';

interface User {
  id: string;
  id_setor: number;
  id_lider_imediato: number;
  id_cargo: number;
  is_admin: number;
  id_empresa: number;
  id_filial: number;
  id_nivel_permissao: number;
  name: string;
  sobrenome: string;
  email: string;
  avatar_url: string;
}

interface AuthState {
  token: string;
  user: User;
}


interface SignInCredentials {
  login: string;
  password: string;
}

interface AuthContextData {
  user: User;
  token: string;
  loginStatus?: number;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [loginStatus, setLoginStatus] = useState();
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@CRS:token');
    const user = localStorage.getItem('@CRS:user');

    if (token && user) {

      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });




  const signIn = useCallback(
    async ({ login, password }: SignInCredentials) => {
      const response = await api.post('api/auth/login', {
        login,
        password,
      })
        .catch(function (error) {

          setLoginStatus(error.response.status)
        });

      const { token, user } = response?.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      localStorage.setItem('@CRS:token', token);
      localStorage.setItem('@CRS:user', JSON.stringify(user));

      setData({ token, user });

      console.log(user.id_nivel_permissao)
      if (user.id_nivel_permissao === 6) {
        navigate('/painel');
      } else {
        navigate('/pages');
      }


    },
    [],
  );

  useEffect(() => {
    console.log(location.pathname)
    if (!data.user || !data.token) {
      navigate('/');
    }
    if (data.user && data.token) {
      if (location.pathname == '/dashboard') {
        navigate('/dashboard');
      } else if (location.pathname == '/consolidado') {
        navigate('/consolidado');
      } else if (location.pathname == '/cadastro') {
        navigate('/cadastro');
      } else if (location.pathname == '/perfil') {
        navigate('/perfil');
      } else if (location.pathname == '/') {
        navigate('/');
      }
    }
  }, [data]);

  const signOut = useCallback(() => {
    localStorage.removeItem('@CRS:token');
    localStorage.removeItem('@CRS:user');

    setData({} as AuthState);
    navigate('/');
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@CRS:user', JSON.stringify(user));
      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, token: data.token, signIn, signOut, updateUser, loginStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be within a AuthProvider');
  }

  return context;
}
