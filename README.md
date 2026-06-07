# 🎵 JohnMusic

![Status](https://img.shields.io/badge/status-in__development-yellow)
![React](https://img.shields.io/badge/frontend-React-20232a?logo=react\&logoColor=%2361DAFB)
![Node.js](https://img.shields.io/badge/backend-Node.js-339933?logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/server-Express-000000?logo=express\&logoColor=white)
![Zustand](https://img.shields.io/badge/state-Zustand-443e38?logo=react\&logoColor=white)
![React Router](https://img.shields.io/badge/routing-React_Router-CA4245?logo=react-router\&logoColor=white)
![JavaScript](https://img.shields.io/badge/language-JavaScript-F7DF1E?logo=javascript\&logoColor=black)

> A modern full-stack music catalog platform built with React and Node.js. JohnMusic delivers a fast and seamless browsing experience, allowing users to search for artists and explore organized discographies through a responsive single-page application architecture.

---

## 📷 Screenshots & Application Preview

### Main Interface & Search View

![JohnMusic Main Interface](https://github.com/user-attachments/assets/cd21909f-e392-428d-b72b-687468c7d869)

### Discography Section

![JohnMusic Discography Grid](https://github.com/user-attachments/assets/b2d5e5b5-2fcf-42d8-8a78-e127680ab2e9)

### Interactive Discography Layout

Clicking on Albums, EPs, or Singles currently opens a "Coming Soon" music preview screen, demonstrating the future direction of detailed release exploration.
---

## 📖 About the Project

JohnMusic is a modern full-stack web application designed for music enthusiasts who want to quickly explore artists and their discographies. The platform combines a decoupled Express backend with a high-performance React frontend to provide smooth navigation and dynamic content loading without full-page refreshes.

The application organizes releases into categories such as Albums, EPs, and Singles, making it easier to browse extensive music catalogs while maintaining excellent performance and responsiveness.

---

## 🚀 Technologies Used

### Frontend

* React 19
* React Router DOM
* Zustand
* Vite
* Lucide React
* JavaScript

### Backend

* Node.js
* Express
* CORS
* dotenv

### Development Tools

* Concurrently
* Nodemon
* ESLint

---

## ⚡ Technical Highlights

* **Global State Management:** Uses Zustand to manage artist data and application state with minimal boilerplate and efficient reactivity.
* **Client-Side Routing:** React Router enables smooth navigation without page reloads.
* **Full-Stack Architecture:** Frontend and backend are fully decoupled, improving maintainability and scalability.
* **Performance-Oriented Design:** Asynchronous data fetching and optimized rendering ensure a responsive user experience.
* **Component-Based Development:** Reusable React components simplify maintenance and future feature expansion.
* **Environment-Based Configuration:** Sensitive credentials are managed through environment variables.

---

## 🖥️ Features

* Artist search functionality.
* Dynamic discography browsing.
* Organized release categories (Albums, EPs, and Singles).
* Interactive release cards.
* Responsive and modern user interface.
* Global state management using Zustand.
* Fast client-side navigation with React Router.
* Concurrent frontend and backend development workflow.

---

## ⚙️ How to Run

### Prerequisites

* Node.js (v16 or higher recommended)
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/johnabyner/johnMusic.git
```

Navigate to the project directory:

```bash
cd johnMusic
```

Install dependencies:

```bash
npm install
cd frontend && npm install
cd ../backend && npm install
```

---

## 🔐 Environment Variables
Before running the application, create the following environment files.

### Backend (`backend/.env`)

```env
PORT=3333
FRONTEND_URL=http://localhost:5173
```

### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:3333
```

### Variable Description

| Variable | Description |
|-----------|-------------|
| `PORT` | Backend server port |
| `FRONTEND_URL` | Allowed frontend origin for CORS |
| `VITE_API_URL` | Backend API URL consumed by the frontend |

---

## ▶️ Running the Application

Start both frontend and backend simultaneously:

```bash
npm start
```

Or run them individually:

Backend:

```bash
npm run dev:backend
```

Frontend:

```bash
npm run dev:frontend
```

---

## 🛠️ Future Improvements

* Real-time tracklist display.
* Favorites and playlist management.
* User authentication and profiles.
* Persistent user preferences.
* Enhanced music discovery features.
* Improved mobile experience.

---

## 👨‍💻 Author

**John Abyner**

GitHub: https://github.com/johnabyner

LinkedIn: https://www.linkedin.com/in/johnabyner/

---

## 📄 License

This project is licensed under the MIT License.
