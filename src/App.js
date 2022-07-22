import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from  './components/Footer'
import AboutUs from './components/AboutUs'
import References from './components/References'
import ContactUs from './components/ContactUs'
import ScrollToTop from './components/ScrollToTop';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about-us' element={<AboutUs />}></Route>
          <Route path='/references' element={<References />}></Route>
          <Route path='/contact-us' element={<ContactUs />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

