import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App'; // Componente de "App"
import TodoApp from './Components/TodoApp'; // Componente de "TodoApp"
import About from './Components/About'; // Componente de "About"
import NavComponent from './Components/NavComponent'; // Componente de navegación
import { AuthProvider } from './Helpers/AuthContext'; // Importamos el contexto de autenticación
import Login from './Components/Login'; // Importamos el componente de login
import PrivateRoute from './Helpers/PrivateRoute';
import {createRoot} from "react-dom/client"; // Importamos el componente de ruta privada

const root = createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <Router>
            <NavComponent /> {/* Renderizamos el componente de navegación */}
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/todos" element={<PrivateRoute element={<TodoApp />} />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    </AuthProvider>
);
