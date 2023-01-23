import React from 'react'
import Header from './Components/Heading/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home.jsx';
import Alldeals from './Components/Product/ProductHome.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Todaydeals from './Components/TodayDeals/TodayDeals.jsx';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/todaydeals" element={<Todaydeals />}/>
          <Route exact path="/alldeals" element={<Alldeals />}/>
          <Route exact path="/contact" element={<Contact />}/>
          
        </Routes>
    </Router>
  )
}

export default App;