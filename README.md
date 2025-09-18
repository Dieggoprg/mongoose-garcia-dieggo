# mongoose-garcia-dieggo

//esta complicado che

Práctica básica con **Mongoose** (MongoDB) para fines de aprendizaje.  
Este proyecto sirve como base para entender cómo conectar una aplicación Node.js con MongoDB usando Mongoose, definir esquemas, realizar operaciones CRUD, etc.

---

## 🧰 Tecnologías

- Node.js  
- Express  
- MongoDB  
- Mongoose  
- Dotenv (para manejo de variables de entorno)  

---

## 📁 Estructura principal

├── src
│ ├── … (tu código fuente)
├── .env.example
├── app.js
├── package.json
└── README.md

- `app.js` — archivo principal de arranque del servidor.  
- `src/` — carpeta con los controladores, modelos, rutas, etc.  
- `.env.example` — archivo de ejemplo para tus variables de entorno (como URI de conexión a MongoDB).  
- `package.json` / `package-lock.json` — dependencias del proyecto.

---


Relaciones:

//PERSON

Una persona puede tener muchas materias, y una Materia puede tener muchos personas.

una persona puede tener muchas direcciones.
muchas direcciones pueden ser de una persona

una persona puede tener un aula.
un aula puede tener muchas personas




