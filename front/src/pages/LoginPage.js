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
    <form className="formularioPersonalizado" onSubmit={onSubmit}>
      <div className=" ">
        <input
          className=""
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />
        <span className=""></span>
      </div>

      <div className="">
        <input
          className=""
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={onChange}
        />
        <span></span>
      </div>

      <div className="">
        <div className="" onClick={() => toggleCheck()}>
          <input
            className=""
            id="ckb1"
            type="checkbox"
            name="rememberme"
            checked={form.rememberme}
            readOnly
          />
          <label className="">Recordarme</label>
        </div>

        <div className="">
          <Link to="/auth/register" className="txt1">
            ¿Nueva cuenta?
          </Link>
        </div>
      </div>

      <div className="">
        <button type="submit" className="" disabled={!todoOk()}>
          Ingresar
        </button>
      </div>
    </form>
  );
};
