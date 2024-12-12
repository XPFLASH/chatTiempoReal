import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

import { AuthContext } from "../auth/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberme: false,
  });

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setForm((form) => ({
        ...form,
        email,
        rememberme: true,
      }));
    }
  }, []);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const toggleCheck = () => {
    console.log("??");
    setForm({
      ...form,
      rememberme: !form.rememberme,
    });
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();

    form.rememberme
      ? localStorage.setItem("email", form.email)
      : localStorage.removeItem("email");

    const { email, password } = form;
    const ok = await login(email, password);

    if (!ok) {
      Swal.fire(
        "Error",
        "Por favor verifique su correo y contraseña.",
        "error"
      );
    }
  };

  const todoOk = () => {
    return form.email.length > 0 && form.password.length > 0 ? true : false;
  };

  return (
    <div className="fatherPrincipal">
      <form className="formularioPersonalizado" onSubmit={onSubmit}>
        <img
          src="/iteconnectlogo.jpg"
          className="elLogo"
          alt="logoDeIteconnect"
        ></img>

        <p className="formularioEtiqueta">Correo electrónico:</p>

        <input
          className="correoInput"
          type="email"
          name="email"
          placeholder="usuario@cuenta.com"
          value={form.email}
          onChange={onChange}
        />
        <p className="formularioEtiqueta">Contraseña:</p>
        <input
          className="correoInput"
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
        />

        <div className="contenedorFila">
          <div className="contenedorRecordarme" onClick={() => toggleCheck()}>
            <input
              className="checkboxPersonalizado"
              id="ckb1"
              type="checkbox"
              name="rememberme"
              checked={form.rememberme}
              readOnly
            />
            <label className="formularioEtiqueta">Recordarme</label>
          </div>

          <div className="">
            <Link to="/auth/register" className="formularioEtiqueta">
              ¿Nuevo Usuario?
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="botonPersonalizado"
          disabled={!todoOk()}
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};
