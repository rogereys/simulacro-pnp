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
            href="https://docs.google.com/forms/d/e/1FAIpQLSfyN_hX_L_urUIlFPOJ5bOVl06WElf7E8zysMz0Qb9S-hH6GQ/viewform?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Ingresar
          </a>
        </div>

        <div className="simulacro-item">
          <h3>Entrevista</h3>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdHD6KtTFlYcdZLVqbpN7LFAsbucscdAizlArUDnohzVZsshA/viewform?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Ingresar
          </a>
        </div>

        <div className="simulacro-item">
          <h3>Psicométrico</h3>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSf2FPtcS015__Yd3nxgb0F06BIQiYPJpoOeKrREkrNfdANIGQ/viewform?usp=sharing" 
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
