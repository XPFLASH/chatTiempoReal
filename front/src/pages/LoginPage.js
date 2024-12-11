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
      Swal.fire("Error", "Verifique el usuario y contraseña", "error");
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
        <p className="formularioEslogan">
          Un espacio seguro para intercambiar mensajes con compañeros y
          maestros.
        </p>
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
          <div className="" onClick={() => toggleCheck()}>
            <input
              className=""
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

        <div className="">
          <button type="submit" className="" disabled={!todoOk()}>
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};
