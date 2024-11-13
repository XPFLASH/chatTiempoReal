import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

import ChatPage from '../pages/ChatPage';
import AuthRouter from './AuthRouter';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRouter = () => {
  return (
    <Router>
        <div>
            <Routes>
                {/* Rutas de autenticacion */}
                <Route path="/auth/*" element={<AuthRouter />} />

                {/* Ruta protegida para ChatPage */}
                <Route path="/chat" element={<ProtectedRoute><ChatPage/></ProtectedRoute>} />

                {/* Redirigir cualquier otra ruta indefinida */}
                <Route path="*" element={<Navigate to="/auth/login" />} />
            </Routes>
        </div>
    </Router>
  );
};

export default AppRouter;
