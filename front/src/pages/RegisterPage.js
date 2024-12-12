import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { AuthContext } from "../auth/AuthContext";

export const RegisterPage = () => {
  const { register } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();

    const { email, password, name } = form;
    const msg = await register(name, email, password);

    if (msg !== true) {
      Swal.fire("Error", msg, "error");
    }
  };

  const todoOk = () => {
    return form.email.length > 0 &&
      form.password.length > 0 &&
      form.name.length > 0
      ? true
      : false;
  };

  return (
    <div className="fatherPrincipal">
      <form className="formularioPersonalizado" onSubmit={onSubmit}>
        <p className="textoPrincipalRegistrarse">Registrarse</p>
        <p className="formularioEtiqueta">
          Para crear tu cuenta, por favor llena los siguientes campos:
        </p>
        <p className="etiquetaRegistro">Nombre de usuario:</p>
        <input
          className="correoInput"
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={onChange}
        />
        <p className="etiquetaRegistro">Correo electrónico:</p>
        <input
          className="correoInput"
          type="email"
          name="email"
          placeholder="usuario@cuenta.com"
          value={form.email}
          onChange={onChange}
        />
        <p className="etiquetaRegistro">Contraseña:</p>

        <input
          className="correoInput"
          type="password"
          name="password"
          placeholder=""
          value={form.password}
          onChange={onChange}
        />

        <div className="contenedorColumna">
          <button
            type="submit"
            className="botonCrearCuenta"
            disabled={!todoOk()}
          >
            Crear cuenta
          </button>

          <Link to="/auth/login" className="textoTienesCuenta">
            ¿Ya tienes una cuenta?
          </Link>
        </div>
      </form>
    </div>
  );
};
