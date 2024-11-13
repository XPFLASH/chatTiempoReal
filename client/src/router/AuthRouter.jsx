import { Navigate, Route, Routes } from 'react-router-dom';

import Login from '../pages/login';
import Register from '../pages/register';

import '../styles/login-register.css';

const AuthRouter = () => {
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-t-50 p-b-90">
                    <Routes>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        
                        {/* Ruta de redireccion para rutas no coincidentes */}
                        <Route path="*" element={<Navigate to="login" />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default AuthRouter;
