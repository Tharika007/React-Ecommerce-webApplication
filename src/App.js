import React from 'react'
import Header from './Components/Heading/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home.jsx';
import Alldeals from './Components/Product/ProductHome.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Todaydeals from './Components/TodayDeals/TodayDeals.jsx';
import Login from './Components/Login/LoginHome.jsx';
import Register from './Components/Login/RegisterHome.jsx';

const express = require("express")
const collection = require("./Mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

app.get("/login",cors(), (req,res) => {

})

app.post("/signup",async(req,res)=>{
  const{email,password}=req.body

  try {
    const check=await collection.findOne({email:email})
    if(check) {
      res.json("exists")
    }
    else{
      res.json("notexits")
    }

  }catch(e) {
    res.json("nonexists")
  }
})

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/todaydeals" element={<Todaydeals />}/>
          <Route exact path="/alldeals" element={<Alldeals />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />}/>
        </Routes>
    </Router>
  )
}

export default App;