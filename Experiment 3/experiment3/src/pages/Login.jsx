import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuth} from "../context/AuthContext"

const Login = () => {
    const {setIsAuthenticated}=useAuth();
    const navigate=useNavigate();
    function handleLogin(){
      setIsAuthenticated(true);
        navigate("/");
    }

  return (
    <>
        <h2>Login</h2>
        <button onClick={handleLogin}>Login to Ecotrack</button>
    </>
  )
}

export default Login;