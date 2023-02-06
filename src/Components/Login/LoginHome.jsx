import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom'

import './Login.css';

function Login() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e) {
    e.preventDefault();

    try {

      await axios.post("http://localhost:3000/login"),{
        email,password
      }

    }catch(e){
      console.log(e);
    }

  }
  return (
    <div>
            <div className='Loginbackgrond'>
              <div className='form'>
                <h1>LOGIN</h1>
                  <form action='POST'>
                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="email"/>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" />
                    <br></br>
                    <input type="submit" />
                  </form>
                </div>
              </div>
            </div>
  );
}

export default Login;