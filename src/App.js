import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Login } from './logger';
import Working from './working'; // Importamos el componente de "En construcción"
import './App.css';

function App() {
  const navigate = useNavigate(); // Hook para redirigir dentro de la SPA
  const location = useLocation(); // Hook para obtener la ubicación actual

  // Efecto para cambiar la clase en el body dependiendo de la ruta activa
  useEffect(() => {
    if (location.pathname === '/working') {
      document.body.classList.add('working-page');
    } else {
      document.body.classList.remove('working-page');
    }
  }, [location]);

  return (
    <div className="home-container">
      <div className="image-container" onClick={() => navigate('/login')}>
        <img src="/img/Client.png" alt="Clientes" className="image" style={{ padding: '3rem' }} />
        <p>Clientes</p>
      </div>

      <div id='' className="image-container" onClick={() => window.open('/working', '_blank')}>
        <img src="/img/Restaurant.png" alt="Restaurantes" className="image" />
        <p>Restaurantes</p>
      </div>

      {/* Definimos las rutas */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/working" element={<Working />} />
      </Routes>
    </div>
  );
}



export default App;
