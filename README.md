# Chat en Tiempo Real en JavaScript :speech_balloon:
## Manual de Usuario 
En este documento proporcionamos una guía completa para que el usuario pueda instalar, configurar y hacer uso del **Chat en Tiempo Real** :speech_balloon:

## Índice
1. [Introducción al Chat en Tiempo Real](#introducción-al-chat-en-tiempo-real)
2. [Propósitos y Beneficios](#propósitos-y-beneficios)
3. [Requisitos mínimos de Hardware y Software](#requisitos-mínimos-de-hardware-y-Software)
4. [Instrucciones de Instalación y Configuración](#instrucciones-de-instalación-y-configuración)
5. 

## Introducción al Chat en Tiempo Real
Este sistema como ya se mencionó es un **Chat en Tiempo Real**  desarrollado en JavaScript, diseñado para permitir a los usuarios comunicarse de manera rápida y sencilla. La funcionalidad principal se basa en el uso de *sockets* para garantizar el envío y recepción instantáneos de mensajes entre los usuarios.
*Los sockets* permiten mantener una conexión bidireccional constante entre el cliente y el servidor, lo que asegura una experiencia fluida al actualizar automáticamente los mensajes sin necesidad de recargar la página.
Su diseño y tecnología permiten su uso tanto en plataformas web como en dispositivos móviles (iOS y Android) ofreciendo flexibilidad y accesibilidad.

  Entre sus características claves destaca:
* La transmisión en tiempo real de los mensajes
* Diseño intuitivo y fácil de usar

## Propósitos y Beneficios 
El propósito principal del **Chat en Tiempo Real** es facilitar la comunicación instantánea entre usuarios de manera eficiente y segura, diseñada con un enfoque completo, el sistema combina un *frontend* interactivo, *sockets* para su comunicación en tiempo real, una *base de datos* para la gestión de información y un *backend*  robusto para garantizar un rendimiento óptimo 

### Beneficios para el Usuario
- Comunicación instantánea
- Interfaz amigable
- Accesibilidad multiplataforma
- Uso en diversos entornos

## Requisitos mínimos de Hardware y Software
El sistema esta diseñado para que sea accesible desde cualquier dispositivo con conexión a internet, ya sea una PC, una laptop, una tablet o un celular (iOS o Android). No requiere especificaciones de _hardware_ avanzadas.

**Para ejecutar** el  **Chat en Tiempo Real** se requieren los siguientes _Software:_

_Backend:_ Un servidor Node.js con los siguientes componentes instalados
- Express:  Framework para manejar las solicitudes HTTP
- Socket.IO: Biblioteca para implementar la comunicación en tiempo real
- JWT (JSON Web Tokens): Herramienta para la autenticación y seguridad de los usuarios
- MongoDB: Base de datos para el almacenamiento y gestión de datos, con conexión necesaria para el funcionamiento del sistema

_Frontend:_ 
- Un navegador web moderno y actualizado (como Chrome, Firefox, Edge, o Safari)

## Instrucciones de Instalación y Configuración
Para que el sistema funcione correctamente, asegúrate de tener _Node.js_ instalado en tu sistema. A continuación, se detallan los pasos para instalar _Node.js_ en Linux:
####1. Instalación de Node.js en Ubuntu/Debian
Actualiza los paquetes del sistema
``
sudo apt update
``
