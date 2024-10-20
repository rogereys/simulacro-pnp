import React, { useState } from 'react';
import '../styles/Login.css'; // Reutilizamos los estilos de login

function Registro({ onRegister, setCurrentScreen }) {
  const [nombre, setNombre] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !username || !password) {
      alert('Todos los campos son obligatorios');
      return;
    }
    onRegister(nombre, username, password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Registrarse</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
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
        <button type="submit">Registrar</button>
        <button type="button" onClick={() => setCurrentScreen(1)} className="secondary-button">
            Volver
        </button>
      </form>
    </div>
  );
}

export default Registro;
