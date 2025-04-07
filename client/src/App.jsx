
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage'
import Contactus from './pages/Contactus';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ScrollToTop from './utils/ScrollToTop';
import { ToastContainer, toast } from 'react-toastify';
import VerifyEmail from './pages/VerifyEmail';
import Onboarding from './pages/Onboarding';


function App() {

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
                      <Route path="/onboarding" element={<Onboarding/>} />
              </Routes>  
        </Router>  
    </>
  )
}

export default App;
