import React, { useState } from 'react';
// import '../styles/login.css';
import '../styles/login-register.css'
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        // Guardar el token de acceso en localStorage
        localStorage.setItem('access_token', data.access_token);
        // alert(data.message);
        navigate('/chat');
      } else {
        alert(data.message);
      }
    } catch (error) {
      setError('Error al conectar con el servidor');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login100-form validate-form flex-sb flex-w">
      <h1 className="login100-form-title mb-3">Iniciar Sesión</h1>

      <div className="wrap-input100 validate-input mb-3">
        <label htmlFor="email"><FaEnvelope /> Correo:</label>
        <input 
          className="input100" 
          type="email" 
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <label htmlFor="password"><FaLock /> Contraseña:</label>
        <input 
          className="input100" 
          type="password" 
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />
        <span className="focus-input100"></span>
      </div>

      <div className="cent-itm">
        <div className="col">
          <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
          <label className="label-checkbox100">Recordarme</label>
        </div>

        <div className="cent-itm">
          <Link to="/auth/register" className="txt1">¿No tienes cuenta? Regístrate</Link>
        </div>
      </div>

      <div className="container-login100-form-btn ">
        <button type="submit" className="login100-form-btn">Iniciar Sesión</button>
      </div>
    </form>
  );
};

export default Login;
