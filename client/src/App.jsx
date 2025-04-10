
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage'
import Contactus from './pages/Contactus';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ScrollToTop from './utils/ScrollToTop';
import { ToastContainer, toast } from 'react-toastify';
import VerifyEmail from './pages/VerifyEmail';
import Onboarding from './pages/Onboarding';

import { isTokenValid } from "./utils/auth";
import MainDashboard from './MainDashboard';

function App() {
  const isAuthenticated = isTokenValid();
  return ( 
    <>
        <Router>
        <ScrollToTop />
        <ToastContainer position="top-right" autoClose={3000} />
              <Routes>              
                      <Route path="*" element={<Homepage />} />
                      <Route path="/Contact" exact element={<Contactus />} />
                      <Route path="/Signup" exact element={<Signup />} />
                      <Route path="/Login" exact element={<Login />} />
                      <Route path="/verify-email" element={<VerifyEmail />} />
                      <Route path="/verify-email/:token" element={<VerifyEmail />} />
                      <Route path="/onboarding" element={ isAuthenticated ? <Onboarding /> : <Navigate to="/Login" replace />} />
                      <Route path="/dashboard" element={ <MainDashboard />} />
              </Routes>  
        </Router>  
    </>
  )
}

export default App;
