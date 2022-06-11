import React, { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupWrapper from "../styles/SignupWrapper";
import toast, { Toaster } from 'react-hot-toast';
const Signup = () => {
  const [name, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState('');
  const [error,setError]=useState(false);
  const [errorWarning,setErrorWarning]=useState(false);
  const navigate = useNavigate();
  const notify = (message) => toast(message, {
    position: "top-right",
    duration: 4000,

  })
  const regEx = /^[0-9a-zA-Z]+$/;
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      navigate('/dashboard');
    }
  },[])
  useEffect(()=>{
    if(password.length < 6 || password.match(regEx) !== null){
      setErrorWarning(true);
    }else {
      setErrorWarning(false);
    }
  },[password])
  const registerUser = async (e) => {
    e.preventDefault();
    if(password.length < 6  || password.match(regEx) !== null){
      setErrorWarning(true);
      return;
    }
    const response = await fetch("http://localhost:1000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({
        name,
        email,
        password
      })
    })
    const data = await response.json();
    if(data.status =='error'){
      toast.error(data.message, {
        position: "top-right",
        duration: 4000,
        icon: '👏',
      })
      setError(true);
    }else {
      toast.success("Signup successfull", {
        position: "top-right",
        duration: 4000,
        icon: '👏',
      })
      navigate('/dashboard');
    }
  };
  return (
    <SignupWrapper>
      <div className="container">
      <h1>Register here</h1>
      <p>{error || errorWarning? "Please Fill All Field Correctly" : null}</p>
      <form className='form' onSubmit={registerUser}>
        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <label className="label">Email:</label>
        <input
        required
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="label">Password</label>
        <input
        required
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <div className='msg'>
              <p className='color-blue'>Minimum 6 and alphanumeric</p>
            </div>
        <button disabled={errorWarning}  className= {errorWarning ? "disabled" : "btn"}   >Signup</button>
      </form>
      <button className= "signup" >
        <Link className='link' to='/login'>Login</Link>
      </button>
      </div>
      <Toaster />
    </SignupWrapper>
  );
};

export default Signup;
