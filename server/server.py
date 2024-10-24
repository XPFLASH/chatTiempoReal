#pylint:disable=all

from flask import Flask, request, jsonify, session, redirect, url_for
from flask_cors import CORS
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)


app.config['SECRET_KEY'] = 'ssf2lg2019'

CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}}, supports_credentials=True)

client = MongoClient('mongodb+srv://al20760258:nQ2e40ebnmSbOEEQ@clusterchat.t1aju.mongodb.net/chatDB')
db = client['chatDB']
users_collection = db['usuarios']

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

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = users_collection.find_one({"email": email})
    if not user or not check_password_hash(user['password'], password):
        return jsonify({"message": "Correo o contraseña incorrectos"}), 401

    session['user_id'] = str(user['_id'])
    session['user_name'] = user['name']
    return jsonify({"message": "Inicio de sesión exitoso", "user": user['name']}), 200

@app.route('/logout', methods=['GET'])
def logout():
    session.pop('user_id', None)
    session.pop('user_name', None)
    return jsonify({"message": "Sesión cerrada exitosamente"}), 200

@app.route('/protected', methods=['GET'])
def protected_route():
    if 'user_id' in session:
        return jsonify({"message": f"Bienvenido, {session['user_name']}! Esta es una ruta protegida."}), 200
    return jsonify({"message": "No autorizado. Inicie sesión para acceder."}), 401

@app.route('/')
def home():
    return "Conectado a MongoDB Atlas exitosamente"

if __name__ == '__main__':
    app.run(debug=True)
