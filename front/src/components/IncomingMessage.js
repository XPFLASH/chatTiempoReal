import React from "react";
import { horaMes } from "../helpers/horaMes";

export const IncomingMessage = ({ msg }) => {
  return (
    <div className="contenedorPadreMensajeEntrante">
      <img
        src="https://ptetutorials.com/images/user-profile.png"
        alt="sunil"
        className="mensajeEntranteAvatar"
      />

      <div className="mensajeEntranteTextoYHora">
        <p className="mensajeEntranteTexto">{msg.mensaje}</p>
        <p className="mensajeEnviadoHora"> {horaMes(msg.createdAt)}</p>
      </div>
    </div>
  );
};
