import React, { useState } from 'react';
import '../styles/Login.css';

function Login({ onLogin, setCurrentScreen }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Simulacro PNP</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
        <button type="button" onClick={() => setCurrentScreen(5)} className="secondary-button">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Login;
