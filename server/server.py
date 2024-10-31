#pylint:disable=all

from flask import Flask, request, jsonify, session
from flask_cors import CORS
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import (
    JWTManager, create_access_token, create_refresh_token, 
    jwt_required, get_jwt_identity, set_refresh_cookies, unset_jwt_cookies
)
from datetime import timedelta

app = Flask(__name__)

app.config['SECRET_KEY'] = 'ssf2lg2019'
app.config['JWT_SECRET_KEY'] = 'mi_secreto_jwt'  # Cambiar por un secreto seguro en producción
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(minutes=1)  # Expiración del token de acceso
app.config['JWT_REFRESH_TOKEN_EXPIRES'] = timedelta(minutes=2)    # Expiración del token de renovación

# Inicializar JWTManager y CORS
jwt = JWTManager(app)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}}, supports_credentials=True)

# Configuración de MongoDB
client = MongoClient('mongodb+srv://al20760258:nQ2e40ebnmSbOEEQ@clusterchat.t1aju.mongodb.net/chatDB')
db = client['chatDB']
users_collection = db['usuarios']

# Ruta para registrar usuarios
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if not name or not email or not password:
        return jsonify({"message": "Todos los campos son obligatorios"}), 400

    if users_collection.find_one({"email": email}):
        return jsonify({"message": "El usuario ya está registrado con este correo"}), 400

    hashed_password = generate_password_hash(password)
    new_user = {"name": name, "email": email, "password": hashed_password}
    users_collection.insert_one(new_user)

    return jsonify({"message": "Usuario registrado exitosamente"}), 201

# Ruta de autenticación (login)
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = users_collection.find_one({"email": email})
    if not user or not check_password_hash(user['password'], password):
        return jsonify({"message": "Correo o contraseña incorrectos"}), 401

    # Crear tokens de acceso y de renovación
    access_token = create_access_token(identity={'name': user['name'], 'email': user['email']})
    refresh_token = create_refresh_token(identity={'name': user['name'], 'email': user['email']})

    response = jsonify({"message": "Inicio de sesión exitoso", "access_token": access_token})
    set_refresh_cookies(response, refresh_token)

    return response, 200

# Ruta protegida
@app.route('/protected', methods=['GET'])
@jwt_required()
def protected_route():
    current_user = get_jwt_identity()
    return jsonify({"message": f"Bienvenido, {current_user['name']}! Esta es una ruta protegida."}), 200

# Ruta para la renovación de tokens
@app.route('/refresh', methods=['POST'])
@jwt_required(refresh=True)
def refresh():
    current_user = get_jwt_identity()
    new_access_token = create_access_token(identity=current_user)

    response = jsonify({'message': 'Token renovado', 'access_token': new_access_token})
    return response, 200

# Ruta para cerrar sesión
@app.route('/logout', methods=['POST'])
def logout():
    response = jsonify({"message": "Sesión cerrada exitosamente"})
    unset_jwt_cookies(response)
    return response, 200

# Ruta de inicio
@app.route('/')
def home():
    return "Conectado a MongoDB Atlas exitosamente"

if __name__ == '__main__':
    app.run(debug=True)
