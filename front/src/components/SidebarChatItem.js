import React, { useContext } from "react";

import { ChatContext } from "../context/chat/ChatContext";
import { fetchConToken } from "../helpers/fetch";
import { scrollToBottom } from "../helpers/scrollToBottom";

import { types } from "../types/types";

export const SidebarChatItem = ({ usuario }) => {
  const { chatState, dispatch } = useContext(ChatContext);
  const { chatActivo } = chatState;

  const onClick = async () => {
    dispatch({
      type: types.activarChat,
      payload: usuario.uid,
    });

    // Cargar los mensajes del chat
    const resp = await fetchConToken(`mensajes/${usuario.uid}`);
    dispatch({
      type: types.cargarMensajes,
      payload: resp.mensajes,
    });

    scrollToBottom("mensajes");
  };

  return (
    <div
      className={`padreDeChatSingularFila ${
        usuario.uid === chatActivo && "active_chat"
      }`}
      onClick={onClick}
    >
      {/* active_chat */}

      <img
        src="https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
        alt="sunil"
        className="chatSingularContenedorImagen"
      />

      <div className="chat_ib">
        <p className="chatSingularNombre"> {usuario.nombre} </p>
        {usuario.online ? (
          <span className="text-success">Activo</span>
        ) : (
          <span className="text-danger">Inactivo</span>
        )}
      </div>
    </div> //concluye padre
  );
};
