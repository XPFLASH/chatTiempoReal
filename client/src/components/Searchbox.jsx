import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searchbox = () => {
    const navigate = useNavigate();
    const [isLoggedOut, setIsLoggedOut] = useState(false); // Estado para monitorear logout

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
                setIsLoggedOut(true);  // Actualiza el estado al cerrar sesión
                navigate('/');  // Redirige al login
            } else {
                alert('Error al cerrar sesión');
            }
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            alert('Hubo un problema al cerrar sesión');
        }
    };

    return (
        <div className="headind_srch">
            <div className="recent_heading mt-2">
                <h4>Recientes</h4>
            </div>
            <div className="srch_bar">
                <div className="stylish-input-group">
                    <button className="btn text-danger" onClick={handleLogout}>
                        Salir
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Searchbox;
