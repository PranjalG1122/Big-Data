import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from  "./components/Footer"
import data from "./components/data"
import AboutUs from "./components/AboutUs"

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about-us' element={<AboutUs />}></Route>
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}

