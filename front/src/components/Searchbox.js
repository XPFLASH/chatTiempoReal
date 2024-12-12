import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

export const Searchbox = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <div className="filaNombreSalir">
      <div className="recent_heading ">
        <p className="nombreUsuarioLogeado">{auth.name}</p>
      </div>
      <div className="srch_bar">
        <div className="">
          <button className="botonSalir" onClick={logout}>
            Salir
          </button>
        </div>
      </div>
    </div>
  );
};
