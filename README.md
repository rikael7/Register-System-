User Registration System | Node.js • Express • MySQL

Backend application developed with Node.js, Express, and MySQL, featuring RESTful APIs, JWT authentication, and full CRUD operations.
This project demonstrates backend fundamentals, clean architecture, and industry-standard practices commonly required for Junior to Mid-Level Backend Developer roles.

🔑 Key Skills Demonstrated (ATS Optimized)
Backend Development with Node.js
RESTful API design and implementation
CRUD operations (Create, Read, Update, Delete)
MySQL relational database
JWT authentication

Password hashing with bcrypt
MVC-inspired project structure
API testing with Postman
Clean code and maintainable architecture

🛠️ Tech Stack
Node.js
Express.js
MySQL
JavaScript (ES6+)
JWT (jsonwebtoken)
bcrypt
body-parser

📂 Project Structure
sistema-cadastro/
│
├── controllers/     # Business logic and data handling
├── models/          # Database connection
├── routes/          # API endpoints
├── app.js           # Application entry point
└── package.json

🧠 Architecture & Design
Separation of concerns using controllers, routes, and models
Modular and scalable codebase
RESTful conventions for endpoints and HTTP methods
Prepared for future enhancements such as middleware, validation, and authorization
This architecture reflects real-world backend applications and common industry patterns.

🗄️ Database Design
Relational database using MySQL
Unique constraints to ensure data consistency
Secure password storage using hashing

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

⚙️ Installation & Setup
git clone https://github.com/your-username/sistema-cadastro.git
npm install
node app.js

Server runs on:
http://localhost:3000

🔌 API Endpoints
Authentication
Method	Endpoint	Description
POST	/users/register	Register new user
POST	/users/login	Authenticate user (JWT)
User Management (CRUD)
Method	Endpoint	Description
GET	/users	Retrieve all users
GET	/users/:id	Retrieve user by ID
PUT	/users/:id	Update user
DELETE	/users/:id	Delete user
📬 Example API Request
{
  "nome": "John Doe",
  "email": "john@example.com",
  "senha": "123456"
}

🔐 Security Practices

Password hashing using bcrypt
JWT token generation for authentication
Sensitive data excluded from API responses
Prepared for environment variable usage in production

🧪 Testing

All endpoints tested using Postman
Manual API validation for request/response flow
Clear separation between public and private endpoints

🎯 Project Purpose

This project was built to:
Practice backend development concepts
Demonstrate API design and database integration
Apply authentication fundamentals
Showcase readiness for Junior to Mid-Level Backend Developer positions

🚧 Planned Improvements

Authentication middleware
Route protection
Input validation (Joi / Zod)
Environment variables (dotenv)
Pagination and filtering
Role-based access control

👨‍💻 Author

Rikael Ribeiro
Backend Developer
GitHub: https://github.com/rikael7