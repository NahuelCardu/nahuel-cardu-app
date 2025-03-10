import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Login } from './logger';
import Working from './working';
import Client from './Client';
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  // Efecto para manejar estilos dependiendo de la ruta
  useEffect(() => {
    if (location.pathname === '/working') {
      document.body.classList.add('working-page');
    } else {
      document.body.classList.remove('working-page');
    }
  }, [location]);

  // Manejar la redirección segura a /client
  const handleClientClick = async () => {
    if (!isAuthenticated) {
      await loginWithRedirect();
    } else {
      navigate('/client');
    }
  };

  return (
    <div className="home-container">
      {location.pathname !== '/client' && (
        <>
          <div className="image-container" onClick={handleClientClick}>
            <img src="/img/Client.png" alt="Clientes" className="image" style={{ padding: '3rem' }} />
            <p>Clientes</p>
          </div>

          <div className="image-container" onClick={() => window.open('/working', '_blank')}>
            <img src="/img/Restaurant.png" alt="Restaurantes" className="image" />
            <p>Restaurantes</p>
          </div>
        </>
      )}
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/working" element={<Working />} />
        <Route path="/client" element={<Client />} />
      </Routes>
    </div>
  );
}

export default App;
