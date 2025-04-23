import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Contactus from './pages/Contactus';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ScrollToTop from './utils/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import VerifyEmail from './pages/VerifyEmail';
import Onboarding from './pages/Onboarding';
import { isTokenValid } from "./utils/auth";

import Dashboard from './pages/Dashboard';
import MainDashboard from './MainDashboard';
import Marketing from './pages/Marketing';
import Analytics from './pages/Analytics';
import Shipping from './pages/Shipping';
import Products from './pages/Products';
import Returns from './pages/Returns';
import Blogs from './pages/Blogs';

function App() {
  const isAuthenticated = isTokenValid();

  return (
    <Router>
      <ScrollToTop />
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        {/* <Route path="/onboarding" element={<Onboarding />} /> */}
        <Route
          path="/onboarding"
          element={isAuthenticated ? <Onboarding /> : <Navigate to="/login" replace />}
          />

        {/* MainDashboard Layout Route with nested children */}
        <Route path="/dashboard" element={isAuthenticated ? <MainDashboard />:  <Navigate to="/login" replace />}>
        {/* <Route path="/dashboard" element={<MainDashboard />}> */}
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="products" element={<Products />} />
          <Route path="returns" element={<Returns />} /> 
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
