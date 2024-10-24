import React, { useState } from 'react'
import '../styles/login.css';
import {FaMailBulk, FaEnvelope, FaLock} from 'react-icons/fa'
import { useNavigate, Link } from 'react-router-dom';


const login = () => {

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
            alert(data.message);
            navigate('/home');
          } else {
            setError(data.message);
          }
        } catch (error) {
          setError('Error al iniciar sesión');
        }
      };
      

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Iniciar Sesion</h1>
            </div>
            <div>
                <label htmlFor="email"><FaEnvelope/> Correo: </label>
                <input 
                type="email" 
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </div>
            <div>
                <label htmlFor="password"> <FaLock/> Contraseña: </label>
                <input 
                type="password" 
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <div>
                <button>Iniciar Sesión</button>
            </div>
            <div>
                <p>¿No tienes cuenta?<a href=""><Link to={"/register"}>Registrate</Link></a></p>
            </div>
        </form>
    </div>
  )
}

export default login