import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); 

  const checkTokenValidity = async () => {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    // Si no hay tokens, marcar como no autenticado
    if (!accessToken || !refreshToken) {
      setIsAuthenticated(false);
      return;
    }

    try {
      // Intento de acceso a una ruta protegida con el token de acceso
      const response = await fetch('http://localhost:5000/protected', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        // Token de acceso es válido
        setIsAuthenticated(true);
      } else if (response.status === 401) {
        // Token de acceso ha expirado, intentar renovarlo
        const refreshResponse = await fetch('http://localhost:5000/refresh', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${refreshToken}`,
          },
        });

        const data = await refreshResponse.json();
        if (refreshResponse.ok) {
          // Guarda el nuevo token de acceso y marca como autenticado
          localStorage.setItem('access_token', data.access_token);
          setIsAuthenticated(true);
        } else {
          // Token de renovación también ha expirado, marcar como no autenticado
          setIsAuthenticated(false);
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
        }
      }
    } catch (error) {
      console.error("Error al verificar el token:", error);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkTokenValidity();
  }, []);

  // Redirige si isAuthenticated es false después de la verificación
  if (isAuthenticated === false) {
    return <Navigate to="/" replace />;
  }

  // Renderiza el contenido protegido si el usuario está autenticado
  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
