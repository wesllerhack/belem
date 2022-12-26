import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import MainPage from './MainPage'
import RegisterPage from './RegisterPage';

const AppRoutes = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<MainPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default AppRoutes
