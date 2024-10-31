import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Manejar el cierre de sesión
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        // Obtener el mensaje de la respuesta
        const data = await response.json();
        alert(data.message);

        // Limpiar el token de acceso y redirigir al login
        localStorage.removeItem('access_token');
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
        <h1>Bienvenido al Chat</h1>
        <p>Aqui va el chat (En desarrollo...)</p>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Home;
