import React from 'react'
import Header from './Components/Heading/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home.jsx';
import Products from './Components/Product/ProductHome.jsx';
import Login from './Components/Login/Login.jsx';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          
        </Routes>
    </Router>
  )
}

export default App;