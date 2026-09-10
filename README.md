# 🚀 React Todo App — Redux Toolkit

A modern and responsive **Todo Application** built with **React.js, Redux Toolkit, Vite, and Tailwind CSS**.

This project demonstrates practical **global state management with Redux Toolkit**, including creating, updating, and deleting tasks through a clean and responsive user interface.

## 🔗 Live Demo

🌐 **Live Application:** https://redux-tool-kit-l7rk-mu.vercel.app/

## ✨ Features

* ➕ **Add Tasks** — Create and add new tasks to the todo list.
* ✏️ **Edit Tasks** — Update existing tasks directly from the interface.
* ❌ **Delete Tasks** — Remove tasks from the application state instantly.
* 🔄 **Global State Management** — Manage todo data efficiently using Redux Toolkit.
* 🎨 **Modern UI** — Dark-themed glassmorphism interface with a clean layout.
* 📱 **Responsive Design** — Works across desktop, tablet, and mobile screen sizes.
* ⚡ **Fast Development** — Built with Vite for a fast development experience.

## 🛠️ Tech Stack

| Technology            | Purpose                                |
| --------------------- | -------------------------------------- |
| **React.js**          | Building the user interface            |
| **Redux Toolkit**     | Global state management                |
| **React Redux**       | Connecting React components with Redux |
| **Vite**              | Development and build tooling          |
| **Tailwind CSS**      | Responsive UI and styling              |
| **JavaScript (ES6+)** | Application logic                      |

## 🔄 Application Flow

```text
User Action
    ↓
React Component
    ↓
Redux Action
    ↓
Todo Slice
    ↓
Redux Store
    ↓
Updated State
    ↓
React UI
```

The application uses Redux Toolkit to maintain the todo state centrally and update the interface whenever a task is added, edited, or deleted.

## 🧠 Redux Toolkit Implementation

The project uses Redux Toolkit's `createSlice()` to define the todo state and its reducers.

```javascript
createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo,
    updateTodo,
    deleteTodo
  }
});
```

React components interact with the Redux store using:

```javascript
useSelector()
useDispatch()
```

This keeps state management organized and makes the application easier to maintain as it grows.

## 📂 Project Structure

```text
Redux-Tool-Kit/
│
└── Redux-Tool-Kit/
    │
    ├── src/
    │   ├── components/
    │   ├── redux/
    │   │   └── todoSlice.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    │
    ├── package.json
    ├── vite.config.js
    └── README.md
```

## 💻 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project

```bash
cd Redux-Tool-Kit/Redux-Tool-Kit
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available on the local Vite development server.

## 🎯 Project Highlights

### Global State Management

Implemented centralized todo state using **Redux Toolkit**, allowing multiple components to work with the same application state.

### CRUD Operations

Implemented the core todo operations:

```text
Create → Add Task
Read   → Display Tasks
Update → Edit Task
Delete → Remove Task
```

### Component-Based Architecture

The application is structured using reusable React components, keeping the UI and state management organized.

### Responsive Interface

Built a responsive interface using **Tailwind CSS**, with a modern dark glassmorphism design.

## 📚 Key Learnings

Through this project, I practiced:

* Setting up Redux Toolkit in a React application
* Creating and managing Redux slices
* Working with `createSlice()`
* Using `useSelector()` to access global state
* Using `useDispatch()` to dispatch Redux actions
* Managing CRUD operations through Redux
* Structuring React components
* Building responsive interfaces with Tailwind CSS
* Using Vite for React development and production builds

## 🌐 Deployment

The application is deployed on **Vercel**.

**Live Demo:** https://redux-tool-kit-l7rk-mu.vercel.app/

## 👨‍💻 Author

**Abdullah Asim**

MERN Stack Developer | React Developer

* GitHub: https://github.com/Abdullah-Asim-dev
* LinkedIn: https://www.linkedin.com/in/abdullah-asim-dev/

## 📄 License

This project was created for learning and portfolio purposes.
