# Chat en Tiempo Real en JavaScript :speech_balloon:
## Manual de Usuario 
En este documento proporcionamos una guía completa para que el usuario pueda instalar, configurar y hacer uso del **Chat en Tiempo Real** :speech_balloon:

## Índice
1. [Introducción al Chat en Tiempo Real](#introducción-al-chat-en-tiempo-real)
2. [Propósitos y Beneficios](#propósitos-y-beneficios)
3. [Requisitos mínimos de Hardware y Software](#requisitos-mínimos-de-hardware-y-Software)
4. [Instrucciones de Instalación y Configuración](#instrucciones-de-instalación-y-configuración)
5. [Guía de Acceso y Recuperación de Credenciales](#guía-de-acceso-y-recuperación-de-credenciales)
6. [Roles de Usuario y Permisos](#roles-de-usuario-y-permisos)
7. [Guía de la Interfaz de Usuario y Sus Componentes Principales](#guía-de-la-interfaz-de-usuario-y-sus-componentes-principales)
8. [Guía de Elementos Interactivos: Íconos, Botones y Navegación](#guía-de-elementos-interactivos:-íconos,-botones-y-navegación)
9. [Preguntas Frecuentes (FAQ) y Soluciones a Problemas Comunes](#preguntas-frecuentes-(FAQ)-y-soluciones-a-problemas-comunes)
10. [Solución de Errores: Qué Hacer si la Aplicación No Responde](#solución-de-errores:-que-hacer-si-la-aplicación-no-responde)

## Introducción al Chat en Tiempo Real
La aplicación como ya se mencionó es un **Chat en Tiempo Real**  desarrollado en JavaScript, diseñado para permitir a los usuarios comunicarse de manera rápida y sencilla. La funcionalidad principal se basa en el uso de *sockets* para garantizar el envío y recepción instantáneos de mensajes entre los usuarios.
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
La aplicación esta diseñado para que sea accesible desde cualquier dispositivo con conexión a internet, ya sea una PC, una laptop, una tablet o un celular (iOS o Android). No requiere especificaciones de _hardware_ avanzadas.

**Para ejecutar** el  **Chat en Tiempo Real** se requieren los siguientes _Software:_

_Backend:_ Un servidor Node.js con los siguientes componentes instalados
- Express:  Framework para manejar las solicitudes HTTP
- Socket.IO: Biblioteca para implementar la comunicación en tiempo real
- JWT (JSON Web Tokens): Herramienta para la autenticación y seguridad de los usuarios
- MongoDB: Base de datos para el almacenamiento y gestión de datos, con conexión necesaria para el funcionamiento del sistema

_Frontend:_ 
- Un navegador web moderno y actualizado (como Chrome, Firefox, Edge, o Safari)

## Instrucciones de Instalación y Configuración
Para que la aplicación funcione correctamente, asegúrate de tener _Node.js_, _Express_, _Sockets.IO_, _jsonwebtoken_ y _MongoDB_ instalado en tu sistema. A continuación, se detallan los pasos para instalar _Node.js_,  _Express_, _socket.IO_, _jsonwebtoken_ y _MongoDB_ en 3 distros diferentes de Linux y en Windows:
## Instalación de Node.js en Ubuntu/Debian
Actualiza los paquetes del sistema con el comando 
``sudo apt update``
#### 1. Instala Node.js desde su repositorio oficial
``sudo apt install nodejs`` 
#### 2. Instala npm (el gestor de paquetes de Node.js)
``sudo apt install npm``
#### 3. Verificamos la instalación de ambos
``node -v``
``npm -v``

## Instalación de Node.js en Fedora
Actualiza los paquetes del sistema
``sudo dnf update``
#### 1. Instala Node.js desde su repositorio oficial
``sudo dnf install nodejs`` 
#### 2. Instala npm (el gestor de paquetes de Node.js)
``sudo dnf install npm``
#### 3. Verificamos la instalación de ambos
``node -v``
``npm -v``

## Instalación de Node.js en Arch Linux
Actualiza los paquetes del sistema
``sudo pacman -Syu``
#### 1. Instala Node.js desde su repositorio oficial
``sudo pacman -S nodejs npm`` 
#### 2. Instala npm (el gestor de paquetes de Node.js)
``sudo pacman -S npm``
#### 3. Verificamos la instalación de ambos
``node -v``
``npm -v``

## Instalación de Node.js en Windows
#### 1.  Dirígete a la [Página oficial de Node.js](https://nodejs.org/en "Página oficial de Node.js")
- Descarga la versión adecuada a tu sistema
#### 2. Ejecuta el instalador
- Sigue los pasos recomendados, asegúrate de marcar la opción para instalar npm (se incluirá automáticamente con Node.js)
#### 4. Verifica la instalación
- Abre tu CMD o PowerShell y ejecuta los siguientes comandos
``node -v``
``npm -v``

## Instalación de Express en Ubuntu/Debian, Fedora y Arch Linux
1. Asegúrate de tener Node.js instalado (consulta la sección más arriba para instalar Node.js)
2. Instalar Express usando npm (el gestor de paquetes de Node.js)
``sudo npm install express --save``

## Instalación de Express en Windows
1. Asegúrate de tener Node.js instalado (consulta la sección más arriba para instalar Node.js)
2. Abre tu CMD o PowerShell y navega a la dirección de tu proyecto
3. Instalar Express usando npm (el gestor de paquetes de Node.js)
``sudo npm install express --save``

### Para verificar su instalación 
Puedes verificar si se ha instalado correctamente revisando las dependencias en el archivo _package.json_ de tu proyecto. Deberías ver algo en la sección de dependencies así (la versión puede variar dependiendo la versión instalada)

     "dependencies": {
                      "express": "^4.17.1"
                    }

## Instalación de socket.IO en Ubuntu/Debian, Fedora y Arch Linux
1. Asegúrate de tener Node.js instalado (consulta la sección más arriba para instalar Node.js)
2. Instalar socket.IO usando npm (el gestor de paquetes de Node.js)
``sudo npm install socket.io --save``

## Instalación de spcket.IO en Windows
1. Asegúrate de tener Node.js instalado (consulta la sección más arriba para instalar Node.js)
2. Abre tu CMD o PowerShell y navega a la dirección de tu proyecto
3. Instalar Express usando npm (el gestor de paquetes de Node.js)
``npm install express socket.io --save``

### Para verificar su instalación 
Puedes verificar si se ha instalado correctamente revisando las dependencias en el archivo _package.json_ de tu proyecto. Deberías ver algo en la sección de dependencies así (la versión puede variar dependiendo la versión instalada)

    "dependencies": {
                          "socket.io": "^3.0.0"
                        }

## Instalación de jsonwebtoken en Ubuntu/Debian, Fedora y Arch Linux
``sudo npm install jsonwebtoken --save``

## Instalación de jsonwebtoken en Windows
1. Abre tu CMD o PowerShell y navega a la dirección de tu proyecto
``npm install jsonwebtoken --save``
### Para verificar su instalación 
Puedes verificar si se ha instalado correctamente revisando las dependencias en el archivo _package.json_ de tu proyecto. Deberías ver algo en la sección de dependencies así (la versión puede variar dependiendo la versión instalada)

     "dependencies": {
                              "jsonwebtoken": "^8.5.1"
                            }
                            
## Instalación de MongoDB en Ubuntu/Debian
#### 1. Importa la clave GPG pública
``wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -``
#### 2. Crear el archivo de lista de MongoDB
``echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list``
#### 3. Actualiza los paquetes e instala MongoDB
``sudo apt update``
``sudo apt install -y mongodb-org``

#### 4. Inicia y habilita MongoDB
``sudo systemctl start mongod``
``sudo systemctl enable mongod``

## Instalación de MongoDB en Fedora
#### 1. Crea el archivo /etc/yum.repos.d/mongodb-org-6.0.repo con el siguiente contenido
    [mongodb-org-6.0]
    name=MongoDB Repository
    baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
    gpgcheck=1
    enabled=1
    gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
    
#### 2. Instala MongoDB
``sudo dnf install -y mongodb-org``

#### 3.  Inicia y habilita MongoDB
``sudo systemctl start mongod``
``sudo systemctl enable mongod``

## Instalación de MongoDB en Arch Linux
#### 1. Instalar MongoDB: Usa un gestor como yay para instalar
``yay -S mongodb-bin``
#### 2. Inicia y habilita MongoDB
``sudo systemctl start mongodb``
``sudo systemctl enable mongodb``

## Instalación de MongoDB en Windows
#### 1. Ve a la [Página oficial de MongoDB](https://www.mongodb.com/try/download/community "Página oficial de MongoDB") 
- Descarga la versión adecuada para tu sistema 
#### 2. Instala MongoDB
- Sigue las instrucciones del instalador y selecciona las opciones predeterminadas
#### 3. Configura el entorno
- Asegúrate de que el directorio bin de MongoDB esté en el PATH de las variables de entorno
#### 4. Inicia MongoDB
``mongod --dbpath <ruta-al-directorio-de-datos>``

## Guía de Acceso y Recuperación de Credenciales
En esta sección, se describen los pasos necesarios para acceder a tu cuenta, registrarte como nuevo usuario y recuperar tu contraseña en caso de olvido. A través de estos procedimientos, podrás gestionar de manera segura tu acceso a la aplicación, asegurando que siempre tengas la posibilidad de iniciar sesión o restablecer tus credenciales cuando lo necesites

## Inicio de Sesión
Permite a los usuarios autenticarse en el sistema para acceder a sus datos y funciones personalizadas

**Pasos:**
- Abre el **Chat en Tiempo Real** (en Web o Móvil)
- Dirígete a la sección Iniciar Sesión 
- Ingresa tu correo electrónico en el campo correspondiente
- Introduce tu contraseña
- Haz clic en el botón Entrar
- Si las credenciales son correctas, accederás a tu cuenta. En caso de error, verifica tus datos o si olvidaste tu contraseña utiliza la opción de recuperación de contraseña

## Registro
Los nuevos usuarios deben registrarse para crear una cuenta

**Pasos:**
- En la página de inicio, selecciona la opción _Registrarse_
- Completa el formulario con los siguientes datos
	- Nombre
	- Correo electrónico válido
	- Contraseña
- Haz clic en Crear cuenta
- Recibirás un correo electrónico de verificación. Haz clic en el enlace para confirmar tu cuenta (verificar este punto)
- Una vez confirmada, podrás iniciar sesión

## Recuperación de contraseña
Si olvidas tu contraseña, puedes recuperarla mediante esta opción

**Pasos:**
- En la sección Iniciar Sesión, haz clic en el enlace ¿Olvidaste tu contraseña?
- Ingresa el correo electrónico asociado a tu cuenta
- Recibirás un correo con instrucciones para restablecer tu contraseña
- Guarda los cambios y usa tu nueva contraseña para iniciar sesión

## Roles de Usuario y Permisos

**Usuario básico:** Este rol está destinado a los usuarios comunes que interactúan con la aplicación en su forma estándar
**Permisos:** 
- Iniciar sesión y registrar una cuenta
- Enviar y recibir mensajes en tiempo real
- Acceder a funcionalidades limitadas según la configuración de la aplicación
- 
**Administrador:** Los administradores tienen permisos adicionales para gestionar el sistema y los usuarios
**Permisos:** 
- Crear, editar y eliminar cuentas de usuario
- Modificar configuraciones del sistema
- Acceder a funciones avanzadas de administración

## Guía de la Interfaz de Usuario y Sus Componentes Principales
PENDIENTE de capturas

## Guía de Elementos Interactivos: Íconos, Botones y Navegación
PENDIENTE de capturas

## Preguntas Frecuentes (FAQ) y Soluciones a Problemas Comunes 
#### ¿Qué hago si no puedo iniciar sesión?
_Posible causa_: Credenciales incorrectas o cuenta no registrada
_Solución_:
- Verifica que el correo electrónico y la contraseña sean correctos
- Asegúrate de que la cuenta esté registrada
- Si olvidaste tu contraseña, utiliza la opción de "Recuperar contraseña" en la pantalla de inicio de sesión

#### ¿Cómo registro una nueva cuenta?
- Dirígete a la sección "Registrarse" en la página principal
- Completa los campos requeridos, como nombre, correo electrónico y contraseña
- Verifica tu correo electrónico para activar tu cuenta

#### ¿Es posible recuperar mensajes eliminados?
Dependerá de la configuración del sistema. Por lo general, los mensajes eliminados no son recuperables, a menos que el administrador haya habilitado una función de respaldo

#### ¿Puedo usar el chat en varios dispositivos al mismo tiempo?
Sí, puedes iniciar sesión en varios dispositivos siempre que tengas acceso a tu cuenta

#### ¿Qué navegadores son compatibles con la aplicación web?
La aplicación es compatible con navegadores modernos como Google Chrome, Mozilla Firefox, Microsoft Edge y Safari

#### ¿Qué hago si experimento un retraso en los mensajes o desconexiones?
_Posible causa_: Problemas de conexión a internet o saturación del servidor
_Solución_:
- Verifica tu conexión a internet
- Intenta recargar la página o reiniciar la aplicación
- Si el problema persiste, contacta al administrador
#### ¿Cómo reporto un problema técnico o un usuario?
Dirígete a la sección de "Soporte" o utiliza la opción de "Reportar problema/usuario" en el menú de configuración

## Solución de Errores: Qué Hacer si la Aplicación No Responde


