import React from 'react'
import { useState } from 'react';
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError]=useState(false);
  const handleSignIn = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/login", {
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
    if(data.status =='error'){
      setError(true);
    }
    console.log(data)
  }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSignIn}>
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login;