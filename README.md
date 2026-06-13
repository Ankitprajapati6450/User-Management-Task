# User Management System

A full-stack User Management System built using **React, TypeScript, Vite, Node.js, Express.js, and MongoDB**. This application allows users to create, view, and delete user records through a clean and responsive interface.

---

## 🎥 Project Walkthrough

📹 **Project Demo Video:**
https://drive.google.com/file/d/1G-EXhSskNm9fRJX1PXO2SmBPLw7sx3mm/view?usp=sharing

---

## ✨ Features

* Add new users
* View all users
* Delete existing users
* Form validation
* RESTful API integration
* MongoDB database connectivity
* TypeScript type safety
* Component-based React architecture
* Modular backend structure

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📂 Project Structure

```text
User Management System
│
├── Backend
│   ├── src
│   │   ├── config
│   │   │   └── db.js
│   │   │
│   │   ├── controllers
│   │   │   └── usercontroller.js
│   │   │
│   │   ├── models
│   │   │   └── user.model.js
│   │   │
│   │   └── routes
│   │       └── userroutes.js
│   └── server.js
│
└── Frontend
    └── src
        ├── components
        │   ├── UserForm.tsx
        │   ├── UserForm.css
        │   ├── UserList.tsx
        │   └── UserList.css
        │
        ├── services
        │   └── api.ts
        │
        ├── types
        │   └── user.ts
        │
        ├── App.tsx
        ├── App.css
        └── main.tsx
    
    
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd user-management-task
```

---

## Backend Setup

Navigate to the backend folder:

```bash
cd Backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
MONGODB_URI= your_mongodb_connection_string
PORT=3000
```

Start the backend server:

```bash
npm run dev
```

Backend runs at:

```text
http://localhost:3000
```

---

## Frontend Setup

Open a new terminal:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend application:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 📡 API Endpoints

### Create User

```http
POST /api/users
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 22
}
```

---

### Get All Users

```http
GET /api/users
```

---

### Delete User

```http
DELETE /api/users/:id
```

---

## 🏗️ Architecture & Approach

### Frontend

* Component-based architecture
* React Hooks for state management
* Axios for API communication
* TypeScript interfaces for type safety
* Separate service layer for API requests

### Backend

* MVC-inspired folder structure
* Express.js REST APIs
* Mongoose ODM for MongoDB operations
* Input validation and error handling
* Modular routes and controllers

---

## 📸 Application Workflow

```text
User Form
    ↓
POST API
    ↓
MongoDB Database
    ↓
GET API
    ↓
Users Table
    ↓
DELETE API
    ↓
Updated User List
```



