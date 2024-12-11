# Chat en Tiempo Real en JavaScript :speech_balloon:
## Manual de Usuario :book:
En este documento proporcionamos una guía completa para que el usuario pueda instalar, configurar y hacer uso del **Chat en Tiempo Real** :speech_balloon:

## Índice
1. [Documentación Oficial](#documentación-oficial-blue_book)
2. [Introducción al Chat en Tiempo Real](#introducción-al-chat-en-tiempo-real-paperclip)
3. [Propósitos y Beneficios](#propósitos-y-beneficios-dart)
4. [Requisitos mínimos de Hardware y Software](#requisitos-mínimos-de-hardware-y-Software-computer)
5. [Instrucciones de Instalación y Configuración](#instrucciones-de-instalación-y-configuración-wrench)
6. [Cómo Ejecutar el Chat en Tiempo Real](#cómo-ejecutar-el-chat-en-tiempo-real-arrow_forward)
7. [Guía de Acceso y Recuperación de Credenciales](#guía-de-acceso-y-recuperación-de-credenciales-key)
8. [Roles de Usuario y Permisos](#roles-de-usuario-y-permisos-no_entry_sign)
9. [Guía de la Interfaz de Usuario y Sus Componentes Principales](#guía-de-la-interfaz-de-usuario-y-sus-componentes-principales)
10. [Guía de Elementos Interactivos: Íconos, Botones y Navegación](#guía-de-elementos-interactivos-íconos-botones-y-navegación)
11. [Preguntas Frecuentes (FAQ) y Soluciones a Problemas Comunes](#preguntas-frecuentes-FAQ-y-soluciones-a-problemas-comunes-interrobang)
12. [Solución de Errores: Qué Hacer si la Aplicación No Responde](#solución-de-errores-qué-hacer-si-la-aplicación-no-responde)
13. [Recomendaciones para un Uso Eficiente de la Aplicación](#recomendaciones-para-un-uso-eficiente-de-la-aplicación)
14. [Soporte Técnico y Contacto](#soporte-técnico-y-contacto-envelope)

## Documentación Oficial :blue_book:

## Introducción al Chat en Tiempo Real :paperclip:
La aplicación como ya se mencionó es un **Chat en Tiempo Real**  desarrollado en JavaScript, diseñado para permitir a los usuarios comunicarse de manera rápida y sencilla. La funcionalidad principal se basa en el uso de *sockets* para garantizar el envío y recepción instantáneos de mensajes entre los usuarios.
*Los sockets* permiten mantener una conexión bidireccional constante entre el cliente y el servidor, lo que asegura una experiencia fluida al actualizar automáticamente los mensajes sin necesidad de recargar la página.
Su diseño y tecnología permiten su uso tanto en plataformas web como en dispositivos móviles (iOS y Android) ofreciendo flexibilidad y accesibilidad.

  Entre sus características claves destaca:
* La transmisión en tiempo real de los mensajes
* Diseño intuitivo y fácil de usar

## Propósitos y Beneficios :dart:
El propósito principal del **Chat en Tiempo Real** es facilitar la comunicación instantánea entre usuarios de manera eficiente y segura, diseñada con un enfoque completo, el sistema combina un *frontend* interactivo, *sockets* para su comunicación en tiempo real, una *base de datos* para la gestión de información y un *backend*  robusto para garantizar un rendimiento óptimo 

### Beneficios para el Usuario
- Comunicación instantánea
- Interfaz amigable
- Accesibilidad multiplataforma
- Uso en diversos entornos

## Requisitos mínimos de Hardware y Software :computer:
La aplicación esta diseñado para que sea accesible desde cualquier dispositivo con conexión a internet, ya sea una PC, una laptop, una tablet o un celular (iOS o Android). No requiere especificaciones de _hardware_ avanzadas.

**Para ejecutar** el  **Chat en Tiempo Real** se requieren los siguientes _Software:_

_Backend:_ Un servidor Node.js con los siguientes componentes instalados
- Express:  Framework para manejar las solicitudes HTTP
- Socket.IO: Biblioteca para implementar la comunicación en tiempo real
- JWT (JSON Web Tokens): Herramienta para la autenticación y seguridad de los usuarios
- MongoDB: Base de datos para el almacenamiento y gestión de datos, con conexión necesaria para el funcionamiento del sistema

_Frontend:_ 
- Un navegador web moderno y actualizado (como Chrome, Firefox, Edge, o Safari)

## Instrucciones de Instalación y Configuración :wrench:
Para que la aplicación funcione correctamente, asegúrate de tener _Node.js_, _Express_, _Sockets.IO_ y _jsonwebtoken_ instalado en tu sistema, además de tener bien confugurado  _MongoDB_. A continuación, se detallan los pasos para instalar _Node.js_,  _Express_, _socket.IO_ y _jsonwebtoken_ y la configuración de _MongoDB_  en 3 distros diferentes de Linux y en Windows:

## Instalación de Node.js en Ubuntu/Debian :penguin:
Actualiza los paquetes del sistema con el comando 
``sudo apt update``
#### 1. Instala Node.js desde su repositorio oficial
``sudo apt install nodejs`` 
> Nota: En este proyecto utilizamos la versión 20.11.1 de Node.js. Para asegurarte de instalar esta versión, puedes especificarla o actualizar tu sistema después de la instalación
#### 2. Instala npm (el gestor de paquetes de Node.js)
``sudo apt install npm``
#### 3. Verificamos la instalación de ambos
``node -v``
``npm -v``

## Instalación de Node.js en Fedora :penguin:
Actualiza los paquetes del sistema
``sudo dnf update``
#### 1. Instala Node.js desde su repositorio oficial
``sudo dnf install nodejs`` 
> Nota: En este proyecto utilizamos la versión 20.11.1 de Node.js. Para asegurarte de instalar esta versión, puedes especificarla o actualizar tu sistema después de la instalación
#### 2. Instala npm (el gestor de paquetes de Node.js)
``sudo dnf install npm``
#### 3. Verificamos la instalación de ambos
``node -v``
``npm -v``

## Instalación de Node.js en Arch Linux :penguin:
Actualiza los paquetes del sistema
``sudo pacman -Syu``
#### 1. Instala Node.js desde su repositorio oficial
``sudo pacman -S nodejs npm`` 
> Nota: En este proyecto utilizamos la versión 20.11.1 de Node.js. Para asegurarte de instalar esta versión, puedes especificarla o actualizar tu sistema después de la instalación
#### 2. Instala npm (el gestor de paquetes de Node.js)
``sudo pacman -S npm``
#### 3. Verificamos la instalación de ambos
``node -v``
``npm -v``

## Instalación de Node.js en Windows :floppy_disk:
#### 1.  Dirígete a la [Página oficial de Node.js](https://nodejs.org/en "Página oficial de Node.js")
- Descarga la versión adecuada a tu sistema
> Nota: En este proyecto utilizamos la versión 20.11.1 de Node.js. Para asegurarte de instalar esta versión, puedes especificarla o actualizar tu sistema después de la instalación
#### 2. Ejecuta el instalador
- Sigue los pasos recomendados, asegúrate de marcar la opción para instalar npm (se incluirá automáticamente con Node.js)
#### 4. Verifica la instalación
- Abre tu CMD o PowerShell y ejecuta los siguientes comandos
``node -v``
``npm -v``

## Instalación de Express en Ubuntu/Debian, Fedora y Arch Linux :penguin:
1. Asegúrate de tener Node.js instalado (consulta la sección más arriba para instalar Node.js)
2. Instalar Express usando npm (el gestor de paquetes de Node.js)
``sudo npm install express --save``
> Nota: En este proyecto utilizamos la versión 4.17.1 de Express Para asegurarte de instalar esta versión, puedes especificarla o actualizar tu sistema después de la instalación
## Instalación de Express en Windows :floppy_disk:
1. Asegúrate de tener Node.js instalado (consulta la sección más arriba para instalar Node.js)
2. Abre tu CMD o PowerShell y navega a la dirección de tu proyecto
3. Instalar Express usando npm (el gestor de paquetes de Node.js)
``npm install express``
> Nota: En este proyecto utilizamos la versión 4.17.1 de Express Para asegurarte de instalar esta versión, puedes especificarla o actualizar tu sistema después de la instalación

### Para verificar su instalación :heavy_check_mark:
Puedes verificar si se ha instalado correctamente revisando las dependencias en el archivo _package.json_ de tu proyecto. Deberías ver algo en la sección de dependencies así (la versión puede variar dependiendo la versión instalada)

     "dependencies": {
                      "express": "^4.17.1"
                    }

## Instalación de socket.IO en Ubuntu/Debian, Fedora y Arch Linux :penguin:
1. Asegúrate de tener Node.js instalado (consulta la sección más arriba para instalar Node.js)
2. Instalar socket.IO usando npm (el gestor de paquetes de Node.js)
``sudo npm install socket.io --save``
> Nota: En este proyecto utilizamos la versión 3.0.0 de socket.IO. Para asegurarte de instalar esta versión, puedes especificarla o actualizar tu sistema después de la instalación
## Instalación de socket.IO en Windows :floppy_disk:
1. Asegúrate de tener Node.js instalado (consulta la sección más arriba para instalar Node.js)
2. Abre tu CMD o PowerShell y navega a la dirección de tu proyecto
3. Instalar Express usando npm (el gestor de paquetes de Node.js)
``npm install socket.io``
> Nota: En este proyecto utilizamos la versión 3.0.0 de socket.IO. Para asegurarte de instalar esta versión, puedes especificarla o actualizar tu sistema después de la instalación

### Para verificar su instalación :heavy_check_mark:
Puedes verificar si se ha instalado correctamente revisando las dependencias en el archivo _package.json_ de tu proyecto. Deberías ver algo en la sección de dependencies así (la versión puede variar dependiendo la versión instalada)

    "dependencies": {
                          "socket.io": "^3.0.0"
                        }

## Instalación de jsonwebtoken en Ubuntu/Debian, Fedora y Arch Linux :penguin:
``sudo npm install jsonwebtoken --save``
> Nota: En este proyecto utilizamos la versión 8.5.1 de jsonwebtoken Para asegurarte de instalar esta versión, puedes especificarla o actualizar tu sistema después de la instalación
## Instalación de jsonwebtoken en Windows :floppy_disk:
1. Abre tu CMD o PowerShell y navega a la dirección de tu proyecto
``npm install jsonwebtoken --save``
> Nota: En este proyecto utilizamos la versión 8.5.1 de jsonwebtoken Para asegurarte de instalar esta versión, puedes especificarla o actualizar tu sistema después de la instalación
### Para verificar su instalación :heavy_check_mark:
Puedes verificar si se ha instalado correctamente revisando las dependencias en el archivo _package.json_ de tu proyecto. Deberías ver algo en la sección de dependencies así (la versión puede variar dependiendo la versión instalada)

     "dependencies": {
                              "jsonwebtoken": "^8.5.1"
                            }
                            
## Configuración de MongoDB
MongoDB Atlas es un servicio basado en la nube, por lo que no requiere instalación local del servidor MongoDB en el sistema. Sin embargo, puedes instalar herramientas opcionales como el MongoDB CLI o el cliente gráfico MongoDB Compass para interactuar con la base de datos
#### 1. Crea una Cuenta en MongoDB Atlas
- Dirígete a la [Página oficial de MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database "Página oficial de MongoDB Atlas") y regístrate 
#### 2. Configura un Clúster
- Haz clic en "Build a Cluster"
- Selecciona un proveedor de nube (como AWS, Google Cloud o Azure).
- Configura la región y la capa gratuita (Free Tier)
- Haz clic en Create Cluster y espera a que se cree
#### 3. Configura la Seguridad
- En Database Access, crea un usuario con un nombre de usuario y contraseña
- En Network Access, permite el acceso desde todas las IPs (Allow Access from Anywhere) o especifica direcciones IP específicas
#### 4. Haz clic en Connect en tu clúster
- Selecciona Connect your application
- Copia la cadena de conexión que tendrá un formato como
``mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority``
#### 5. Instala Mongoose en Tu Proyecto
- Asegúrate de tener Node.js instalado
- En tu proyecto Node.js, ejecuta este comando para instalar Mongoose
``npm install mongoose``
> Nota: En este proyecto utilizamos la versión 5.13.22 de Mongoose Para asegurarte de instalar esta versión, puedes especificarla o actualizar tu sistema después de la instalación
#### 6. Configura la Conexión con Mongoose
- En tu código JavaScript o TypeScript, usa la cadena de conexión para conectar Mongoose a MongoDB Atlas


## Cómo Ejecutar el _Chat en Tiempo Real_ :arrow_forward:
Ejecuta el _Chat en Tiempo Real_ con el siguiente comando

``npm start``

## Guía de Acceso y Recuperación de Credenciales :key:
A través de estos procedimientos, podrás gestionar de manera segura tu acceso a la aplicación, asegurando que siempre tengas la posibilidad de iniciar sesión o restablecer tus credenciales una vez que esta funcionalidad esté disponible


## Inicio de Sesión :iphone:
Permite a los usuarios autenticarse en el sistema para acceder a sus datos y funciones personalizadas

**Pasos:**
- Abre el **Chat en Tiempo Real** (en Web o Móvil)
- Dirígete a la sección Iniciar Sesión 
- Ingresa tu correo electrónico en el campo correspondiente
- Introduce tu contraseña
- Haz clic en el botón Entrar
- Si las credenciales son correctas, accederás a tu cuenta. En caso de error, verifica tus datos o si olvidaste tu contraseña utiliza la opción de recuperación de contraseña

## Registro :pencil2:
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

## Recuperación de Contraseña :key:
En está sección, se explica cómo recuperar tu contraseña en caso de olvido. Actualmente, esta aplicación se encuentra en fase **Alpha** y está funcionalidad está planeada para futuras versiones de la aplicación

Una vez disponible, podrás solicitar un enlace para restablecer tu contraseña a través de tu correo electrónico registrado, garantizando así que puedas recuperar el acceso a tu cuenta de manera segura


## Roles de Usuario y Permisos :no_entry_sign:

**Usuario básico:** Este rol está destinado a los usuarios comunes que interactúan con la aplicación en su forma estándar
**Permisos:** 
- Iniciar sesión y registrar una cuenta
- Enviar y recibir mensajes en tiempo real
- Acceder a funcionalidades limitadas según la configuración de la aplicación

## Guía de la Interfaz de Usuario y Sus Componentes Principales
PENDIENTE de capturas

## Guía de Elementos Interactivos: Íconos, Botones y Navegación
PENDIENTE de capturas

## Preguntas Frecuentes (FAQ) y Soluciones a Problemas Comunes :interrobang:
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

_Reinicia la Aplicación_:
- Cierra la aplicación completamente (en el navegador, cierra la pestaña)
- Vuelve a abrirla y verifica si el problema persiste

_Verifica tu Conexión a Internet_:
- Asegúrate de estar conectado a una red estable
- Si estás en Wi-Fi, intenta reiniciar el router

_Limpia la Caché_:
- En la web: Borra la caché del navegador desde la configuración.

**Problemas Comunes Relacionados con Sockets o el Backend** 

_Mensajes que no se envían o reciben_: 
- Verifica tu conexión a internet, ya que los sockets dependen de ella para funcionar correctamente
_Desconexión frecuente del chat_:
- Asegúrate de que el servidor backend esté en ejecución. Si eres administrador, revisa los logs del servidor para identificar posibles errores
_Error al autenticar_:
- Verifica que tu token JWT sea válido y que no haya expirado. Si el problema persiste, intenta cerrar sesión y volver a iniciarla

## Recomendaciones para un Uso Eficiente de la Aplicación
- Mantén tu Navegador o Dispositivo Actualizado
	- Asegúrate de utilizar la última versión de tu navegador o sistema operativo para garantizar la compatibilidad con la aplicación
- Utiliza Conexiones a Internet Estables
	- Conéctate a redes Wi-Fi confiables o asegúrate de tener una buena señal si usas datos móviles
	- Evita redes públicas no seguras para proteger tu información
- No Compartas tus Credenciales
	- Mantén tu nombre de usuario y contraseña en privado
	- Usa contraseñas seguras y actualízalas periódicamente
- Limpia Regularmente la Caché
	- Esto ayuda a evitar problemas de rendimiento y asegura que accedes a la última versión de la aplicación
- Evita Usar la Aplicación en Múltiples Dispositivos Simultáneamente
	- Aunque la aplicación soporta múltiples sesiones, esto podría generar problemas de sincronización de mensajes en tiempo real
- Cierra Sesión en Dispositivos Públicos
	- Si utilizas la aplicación en un dispositivo compartido, asegúrate de cerrar sesión después de usarla para proteger tus datos
- Reporta Problemas Inmediatamente
	- Si encuentras un error o problema técnico, informa al equipo de soporte proporcionando detalles claros para que puedan solucionarlo rápidamente
- Sigue las Políticas de Uso
	- Evita el envío de mensajes inapropiados o spam para mantener un ambiente seguro y respetuoso dentro de la aplicación
- Familiarízate con la Interfaz
	- Dedica unos minutos a explorar la interfaz y conocer las funcionalidades principales, lo que hará tu experiencia más fluida

## Soporte Técnico y Contacto :envelope:
Si necesitas asistencia técnica o tienes preguntas sobre el uso de la aplicación, puedes ponerte en contacto con nuestro equipo de soporte a través de los siguientes canales

Puedes enviarnos un correo electrónico con una descripción detallada de tu problema, y nuestro equipo se pondrá en contacto contigo lo antes posible

**Correo electrónico:** Soporte@chat.com

**Horario de atención:**
Lunes a Viernes: 9:00 AM - 6:00 PM

**Redes Sociales:**
Puedes seguirnos y contactarnos a través de nuestras redes sociales

Facebook: [@tuChat](https://www.facebook.com/?locale=es_LA "@tuChat")

X: [@tuChat](https://x.com/?lang=es "@tuChat")

Instagram: [@tuChat](https://www.instagram.com/ "@tuChat")
