import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import LoginWrapper from "../styles/LoginWrapper";
import toast, { Toaster } from 'react-hot-toast';
import LoadingSpinner from './Loader';
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);
    const navigate = useNavigate();
    const regEx = /^[0-9a-zA-Z]+$/;
    useEffect(()=>{
      const token = localStorage.getItem("token");
  
      if(token){
        navigate('/dashboard');
      }
    },[])
    useEffect(()=>{
      
      if(password.length < 6 || password.match(regEx) !== null){
        setError(true);
      }else {
        setError(false);
      }
    },[password])
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(password.length<6  || password.match(regEx) !== null){
      setError(true);
      setLoading(false)
      return;
    }
    const response = await fetch("http://localhost:1000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({
        email,
        password
      })
    })
    const data = await response.json();
    console.log(data.status);
    if(data.status == "Ok"){
      localStorage.setItem('token',data.token)
      toast.success("Login Successfull", {
        position: "top-right",
        duration: 4000,
        icon: '👏',
      })
      navigate('/dashboard');
    }else {
      toast.success(data.message, {
        position: "top-right",
        duration: 4000,
        icon: '👏',
      })
      setError(true);
    }
    setLoading(false)
  }

  
  return (
    <LoginWrapper>
      <div className='container'>
        <h1>Login</h1>
        {error}
        {loading ? <LoadingSpinner /> :
        <form className='form' onSubmit={handleSignIn}>
          <div className="label">
          <label>Email</label>
          </div>
            
            <input min={6} placeholder='Enter your email Id' type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            <div className="label">
          <label>Password</label>
          </div>
            <input placeholder='Enter your password' type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} required />
            <div className='msg'>
              <p className='color-blue'>Minimum 6 and alphanumeric</p>
            </div>
            <button disabled={error}  className= {error ? "disabled" : "btn"} type="submit">Login</button>
        </form>
}
        {loading ? null :
        <button className='signup'>
          <Link className='link'  to='/register'>Signup</Link>
        </button>}

        </div>
        <Toaster />
    </LoginWrapper>
  )
}

export default Login;