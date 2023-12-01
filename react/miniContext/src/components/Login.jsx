// import { useContext, useState } from 'react'
import React, { useState, useContext } from 'react';
// import UserContext from '../Context/UserContext'
import UserContext from './Context/UserContext'; // Uncomment and fix the import path

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext); // Fix the context import

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
