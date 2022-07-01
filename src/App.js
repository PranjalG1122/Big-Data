import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from  './components/Footer'
import data from './components/data'
import AboutUs from './components/AboutUs'
import References from './components/References'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact-us' element={<AboutUs />}></Route>
          <Route path='/references' element={<References />}></Route>
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}

