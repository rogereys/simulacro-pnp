import React from 'react';
import '../styles/Screen1.css'; // Asegúrate de crear este archivo para los estilos

function Screen1({ setCurrentScreen }) {
  // Función para abrir un enlace en una nueva pestaña
  const openNewTab = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="screen1-container">
      <h2 className="screen1-message">
        Recuerda revisar el prospecto y guía para poder pre-inscribirte
        <br />
        <a
          href="https://www.policia.gob.pe/pnp/archivos/portal/doc/p-admisi%C3%B3n-2024-complementario/PROSPECTO%20DE%20ADMISI%C3%93N%20EXTRAORDINARIO%20A%20LAS%20EESTP%20PNP%202024%20A%20NIVEL%20NACIONAL%20OK.pdf"
          className="prospecto-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Descargar prospecto de admisión
        </a>
      </h2>

      <div className="button-grid">
        <button className="grid-button" onClick={() => openNewTab('https://www.policia.gob.pe/pnp/archivos/portal/doc/p-admisi%C3%B3n-2024-complementario/CUADRO%20DE%20M%C3%89RITO%20AREQUIPA.pdf')}>
          AREQUIPA
        </button>
        <button className="grid-button" onClick={() => openNewTab('https://www.policia.gob.pe/pnp/archivos/portal/doc/p-admisi%C3%B3n-2024-complementario/CUADRO%20DE%20M%C3%89RITO%20CHICLAYO.pdf')}>
          CHICLAYO
        </button>
        <button className="grid-button" onClick={() => openNewTab('https://www.policia.gob.pe/pnp/archivos/portal/doc/p-admisi%C3%B3n-2024-complementario/CUADRO%20DE%20M%C3%89RITO%20AYACUCHO.pdf')}>
          AYACUCHO
        </button>
        <button className="grid-button" onClick={() => openNewTab('https://www.policia.gob.pe/pnp/archivos/portal/doc/p-admisi%C3%B3n-2024-complementario/CUADRO%20DE%20M%C3%89RITO%20CHIMBOTE.pdf')}>
          CHIMBOTE
        </button>
        <button className="grid-button" onClick={() => openNewTab('https://www.policia.gob.pe/pnp/archivos/portal/doc/p-admisión-2024-complementario/CUADRO%20DE%20MÉRITO%20CUSCO.pdf')}>
          CUSCO
        </button>
        <button className="grid-button" onClick={() => openNewTab('https://www.policia.gob.pe/pnp/archivos/portal/doc/p-admisi%C3%B3n-2024-complementario/CUADRO%20DE%20M%C3%89RITO%20HUANCAYO.pdf')}>
          HUANCAYO
        </button>
        <button className="grid-button" onClick={() => openNewTab('https://www.policia.gob.pe/pnp/archivos/portal/doc/p-admisi%C3%B3n-2024-complementario/CUADRO%20DE%20M%C3%89RITO%20ICA.pdf')}>
          ICA
        </button>
        <button className="grid-button" onClick={() => openNewTab('https://www.policia.gob.pe/pnp/archivos/portal/doc/p-admisi%C3%B3n-2024-complementario/CUADRO%20DE%20M%C3%89RITO%20IQUITOS.pdf')}>
          IQUITOS
        </button>
        <button className="grid-button" onClick={() => openNewTab('https://www.policia.gob.pe/pnp/archivos/portal/doc/p-admisi%C3%B3n-2024-complementario/CUADRO%20DE%20M%C3%89RITO%20PIURA.pdf')}>
          PIURA
        </button>
        <button className="grid-button" onClick={() => openNewTab('https://www.policia.gob.pe/pnp/archivos/portal/doc/p-admisi%C3%B3n-2024-complementario/CUADRO%20DE%20M%C3%89RITO%20PUNO.pdf')}>
          PUNO
        </button>
        <button className="grid-button" onClick={() => openNewTab('https://www.policia.gob.pe/pnp/archivos/portal/doc/p-admisi%C3%B3n-2024-complementario/CUADRO%20DE%20M%C3%89RITO%20SAN%20BARTOLO.pdf')}>
          SAN BARTOLO
        </button>
        <button className="grid-button" onClick={() => openNewTab('https://www.policia.gob.pe/pnp/archivos/portal/doc/p-admisi%C3%B3n-2024-complementario/CUADRO%20DE%20M%C3%89RITO%20TARAPOTO.pdf')}>
          TARAPOTO
        </button>
        <button className="grid-button" onClick={() => openNewTab('https://www.policia.gob.pe/pnp/archivos/portal/doc/p-admisi%C3%B3n-2024-complementario/CUADRO%20DE%20M%C3%89RITO%20TRUJILLO.pdf')}>
          TRUJILLO
        </button>
        <button className="grid-button" onClick={() => openNewTab('https://www.policia.gob.pe/pnp/archivos/portal/doc/p-admisi%C3%B3n-2024-complementario/CUADRO%20DE%20M%C3%89RITO%20HU%C3%81NUCO.pdf')}>
          HUÁNUCO
        </button>
        <button className="grid-button" onClick={() => openNewTab('https://www.policia.gob.pe/pnp/archivos/portal/doc/p-admisi%C3%B3n-2024-complementario/CUADRO%20DE%20M%C3%89RITO%20PUENTE%20PIEDRA.pdf')}>
          PUENTE PIEDRA
        </button>
        <button className="grid-button" onClick={() => openNewTab('https://www.policia.gob.pe/pnp/archivos/portal/doc/p-admisi%C3%B3n-2024-complementario/CUADRO%20DE%20M%C3%89RITO%20NACIONAL.pdf')}>
          NACIONAL
        </button>
      </div>

      <button className="back-button" onClick={() => setCurrentScreen(2)}>
        Regresar
      </button>
    </div>
  );
}

export default Screen1;
