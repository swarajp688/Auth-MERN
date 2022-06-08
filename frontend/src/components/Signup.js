import React, { useState } from "react";

const Signup = () => {
  const [userName, setUserName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState('');
  const [error,setError]=useState(false);
  const registerUser = async (e) => {
    console.log("hey");
    e.preventDefault();
    const response = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({
        userName,
        lastName,
        email,
        password
      })
    })
    const data = await response.json();
    if(data.status =='error'){
      setError(true);
    }
    console.log(data)
  };
  return (
    <div>
      <p>{error ? "Please Fill All Field" : null}</p>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

<label>Last Name</label>
        <input
          type="text"
          name="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Passowrd</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
