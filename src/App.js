import React, { useState } from 'react';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Registro from './components/Registro'; // Importar el componente Registro
import './App.css';

const initialUsers = [
  { username: 'admin', password: '112233', nombres: 'Administrador' },
  { username: '76943769@certus.edu.pe', password: '76943769', nombres: 'Keysi Sosa' },
  { username: '61334014@certus.edu.pe', password: '61334014', nombres: 'Lesly Fretel' },
  { username: '74870892@certus.edu.pe', password: '74870892', nombres: 'José Rojas' },
  { username: '76067445@certus.edu.pe', password: '76067445', nombres: 'Pedro Dominguez' }
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(1);
  const [users, setUsers] = useState(initialUsers); // Manejar usuarios
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      setCurrentScreen(2);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentScreen(1); 
    setCurrentUser(null);
  };

  const handleRegister = (nombres, username, password) => {
    const userExists = users.some(u => u.username === username);
    if (userExists) {
      alert('El usuario ya está registrado');
    } else {
      const newUser = { username, password, nombres };
      setUsers([...users, newUser]);
      alert('Usuario registrado con éxito');
      setCurrentScreen(1); // Redirigir al login después del registro
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 2:
        return <Welcome setCurrentScreen={setCurrentScreen} handleLogout={handleLogout} username={currentUser.nombres}/>;
      case 3:
        return <Screen1 setCurrentScreen={setCurrentScreen} />;
      case 4:
        return <Screen2 setCurrentScreen={setCurrentScreen} />;
      case 5:
        return <Registro onRegister={handleRegister} setCurrentScreen={setCurrentScreen} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        currentScreen === 5 ? (
          <Registro onRegister={handleRegister} setCurrentScreen={setCurrentScreen} />
        ) : (
          <Login onLogin={handleLogin} setCurrentScreen={setCurrentScreen} />
        )
      ) : (
        renderScreen()
      )}
    </div>
  );
}

export default App;
