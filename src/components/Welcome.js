import React from 'react';
import '../styles/Welcome.css';
import { FiLogOut } from 'react-icons/fi';  // Icono de logout

// Importa las imágenes directamente
import topImage from '../images/topImage.jpeg';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.png';

function Welcome({ setCurrentScreen, handleLogout, username }) {  // Agregar "username" como prop
  return (
    <div className="welcome-container">
      <div className="navbar">
        {/* Mostrar el nombre del usuario en el mensaje de bienvenida */}
        <h1 className="title">Bienvenid@, {username}!</h1>
        <button className="logout-button" onClick={handleLogout}>
          Salir <FiLogOut className="logout-icon" />
        </button>
      </div>

      <div className="content">
        <div className="image-container">
          <img src={topImage} alt="Imagen superior" className="top-image" />
        </div>

        <div className="buttons-container">
          <div className="button-box">
            <button className="big-button" onClick={() => setCurrentScreen(3)}>INFORMACIÓN</button>
            <img src={image1} alt="Imagen 1" className="small-image" />
          </div>

          <div className="button-box">
            <button className="big-button" onClick={() => setCurrentScreen(4)}>SIMULADOR DE SIMULACRO</button>
            <img src={image2} alt="Imagen 2" className="small-image" />
          </div>
        </div>
      </div>

      {/* Footer con el mensaje de copyright */}
      <footer className="footer">
        <p>&copy; 2024 Simulacro PNP. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Welcome;
