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
    <form onSubmit={onSubmit}>
      <div className="">
        <input
          className=""
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={onChange}
        />
      </div>

      <div className="">
        <input
          className=""
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />
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
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div className="col text-right">
          <Link to="/auth/login" className="txt1">
            Ya tienes cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button
          type="submit"
          className="login100-form-btn"
          disabled={!todoOk()}
        >
          Crear cuenta
        </button>
      </div>
    </form>
  );
};
