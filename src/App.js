import './App.css';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from  "./components/Footer"
import data from "./components/data"

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Main />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

