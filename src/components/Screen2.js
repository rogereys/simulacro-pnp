import React from 'react';
import '../styles/Screen2.css';

function Screen2({ setCurrentScreen }) {
  return (
    <div className="screen2-container">
      <h1 className="screen2-title">SIMULADORES</h1>

      <div className="simulacros-list">
        <div className="simulacro-item">
          <h3>Conocimiento</h3>
          <a 
            href="https://www.ejemplo.com/simulacro1" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Ingresar
          </a>
        </div>

        <div className="simulacro-item">
          <h3>Entrevista</h3>
          <a 
            href="https://www.ejemplo.com/simulacro2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Ingresar
          </a>
        </div>

        <div className="simulacro-item">
          <h3>Psicométrico</h3>
          <a 
            href="https://www.ejemplo.com/simulacro3" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Ingresar
          </a>
        </div>
      </div>

      <button className="back-button" onClick={() => setCurrentScreen(2)}>
        Regresar
      </button>
    </div>
  );
}

export default Screen2;
