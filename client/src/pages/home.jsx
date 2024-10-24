import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/logout', {
        method: 'GET',
        credentials: 'include', 
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigate('/');
      } else {
        alert('Error al cerrar sesión');
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      alert('Hubo un problema al cerrar sesión');
    }
  };

  return (
    <div>
      <div>
        <p>Aqui va el chat (En desarrollo...)</p>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Home;
