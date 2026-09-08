# 🚀 React Todo App (Redux Toolkit)

A clean, modern, and beautifully centered **Todo Application** built with **React 18**, **Redux Toolkit (RTK)**, and styled using **Tailwind CSS v4**. 

This project is built from scratch to demonstrate how to manage global state efficiently in a real-world web application.

---

## ✨ Features

*   ➕ **Add Task**: Seamlessly initialize and add new tasks to your active list.
*   ✏️ **Edit & Update Task**: Click the edit button to automatically pull the task text back into the input container with an active amber flashing dot, changing the mode dynamically to save updates.
*   ❌ **Delete Task**: Instantly purge and remove completed or unwanted tasks from the Redux store.
*   🎨 **Centered Glassmorphic UI**: High-contrast, dark-themed responsive layout that stays perfectly centered on all screen sizes with no background spacing bugs.

---

## 🛠️ Tech Stack Used

*   **Frontend Library:** React 18
*   **State Management:** Redux Toolkit (`@reduxjs/toolkit` & `react-redux`)
*   **Build Tool:** Vite
*   **Styling Engine:** Tailwind CSS v4

---

## 💻 How to Run Locally

Follow these quick steps to set up and run the project on your machine:

```bash
# 1. Clone the repository
git clone https://github.com

# 2. Navigate into the core project folder
cd Redux-Tool-Kit/Redux-Tool-Kit

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

---

## 🧠 What I Learned Doing This Project

*   Setting up a global Redux store using **Slices** (`createSlice`).
*   Connecting React components to Redux state using `useSelector` and dispatching actions via `useDispatch`.
*   Debugging complex environment setup issues, routing package installation paths correctly, and fixing broken syntax files manually.
*   Designing responsive interfaces with layout safety fallbacks under the new Tailwind v4 ecosystem.
