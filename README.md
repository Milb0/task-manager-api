# 📝 Personal Task Manager API

A RESTful backend API for managing personal tasks, built with Node.js, Express, and MongoDB.

## Features

- JWT-based authentication (register & login)
- Full CRUD operations on tasks
- Only the task owner can view, modify, or delete their tasks
- Input validation on all endpoints
- Filter tasks by completion status
- RESTful conventions throughout

## Tech Stack

| Technology | Purpose |
|---|---|
| Node.js + Express.js | Backend framework |
| MongoDB Atlas | Cloud database |
| Mongoose | ODM for MongoDB |
| JWT (jsonwebtoken) | Authentication |
| bcryptjs | Password hashing |
| express-validator | Input validation |

## Project Structure

```
task-manager-api/
├── src/
│   ├── config/
│   │   └── db.js              ← MongoDB connection
│   ├── controllers/
│   │   ├── authController.js  ← Register & login logic
│   │   └── taskController.js  ← Task CRUD logic
│   ├── middleware/
│   │   └── authMiddleware.js  ← JWT verification
│   ├── models/
│   │   ├── User.js            ← User schema
│   │   └── Task.js            ← Task schema
│   ├── routes/
│   │   ├── authRoutes.js      ← /api/auth routes
│   │   └── taskRoutes.js      ← /api/tasks routes
│   └── app.js                 ← Entry point
├── .env                       ← Environment variables (not included)
└── package.json
```

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Milb0/task-manager-api.git
cd task-manager-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Run the server:
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | /api/auth/register | not needed | Register a new user |
| POST | /api/auth/login | not needed | Login and get JWT token |

### Tasks
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | /api/tasks | needed | Get all tasks |
| GET | /api/tasks?completed=true | needed | Filter by status |
| POST | /api/tasks | needed | Create a new task |
| PUT | /api/tasks/:id | needed | Update a task |
| DELETE | /api/tasks/:id | needed | Delete a task |

> All task routes require a Bearer token in the Authorization header.

## Testing

Import the Postman collection included in the repository to test all endpoints.

### Register Example
```json
POST /api/auth/register
{
  "name": "Ilyes",
  "email": "ilyes@example.com",
  "password": "123456"
}
```

### Create Task Example
```json
POST /api/tasks
Authorization: Bearer <token>
{
  "title": "Study for exam",
  "description": "Review chapters 1 to 5",
  "dueDate": "2026-06-01"
}
```
