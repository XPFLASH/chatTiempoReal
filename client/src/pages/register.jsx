import React, { useState } from 'react'
import '../styles/register.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'

const register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {

        resetCampos();
        alert(data.message);
      } else {
        resetCampos();
        alert(data.message);
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      alert('Hubo un error al registrar el usuario');
    }
  };

  const resetCampos = () =>{
    setName("");
    setEmail("");
    setPassword("")
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Registro</h1>
            </div>
            <div>
                <label htmlFor="user"><FaUser/> Nombre: </label>
                <input 
                type="text" 
                id='user'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required />
            </div>
            <div>
                <label htmlFor="email"><FaEnvelope/> Correo: </label>
                <input 
                type="email" 
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>
            <div>
                <label htmlFor="password"> <FaLock/> Contraseña: </label>
                <input 
                type="password" 
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            </div>
            <div>
                <button>Crear cuenta</button>
            </div>
        </form>
    </div>
  )
}

export default register