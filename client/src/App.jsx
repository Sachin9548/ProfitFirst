
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage'
import Contactus from './pages/Contactus';

function App() {

  return (
    <>
        <Router>
              <Routes>              
                      <Route path="*" element={<Homepage />} />
                      <Route path="/Contact" exact element={<Contactus />} />
              </Routes>  
        </Router>  
    </>
  )
}

export default App;
