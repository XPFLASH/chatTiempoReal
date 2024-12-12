import React from "react";
import { horaMes } from "../helpers/horaMes";

export const OutgoingMessage = ({ msg }) => {
  return (
    <div className="contenedorPadreMensajeEnviado">
      <div className="subcontenedorMensajeHora">
        <p className="mensajeEnviadoTexto">{msg.mensaje}</p>
        <p className="mensajeEnviadoHora"> {horaMes(msg.createdAt)} </p>
      </div>
    </div>
  );
};
