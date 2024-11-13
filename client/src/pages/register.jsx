/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
// import '../styles/register.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'
// import '../styles/login-register.css'
import { Link } from 'react-router-dom';

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
    <div className="limiter">
    <div className="container-login100">
      <div className="wrap-login100 p-t-50 p-b-90">
        <form onSubmit={handleSubmit} className="login100-form validate-form flex-sb flex-w">
          <span className="login100-form-title mb-3">
            Registro
          </span>

          <div className="wrap-input100 validate-input mb-3">
            <input
              className="input100"
              type="text"
              name="name"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span className="focus-input100"></span>
          </div>

          <div className="wrap-input100 validate-input mb-3">
            <input
              className="input100"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="focus-input100"></span>
          </div>

          <div className="wrap-input100 validate-input mb-3">
            <input
              className="input100"
              type="password"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="focus-input100"></span>
          </div>

          <div className="row mb-3">
            <div className="col text-right">
              <Link to="/auth/login" className="txt1">
                ¿Ya tienes cuenta?
              </Link>
            </div>
          </div>

          <div className="container-login100-form-btn m-t-17">
            <button className="login100-form-btn">
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default register