import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importamos Router y Routes
import './index.css';
import App from './App'; // Componente principal
import TodoApp from './Components/TodoApp'; // Componente de la lista de tareas
import About from './Components/About'; // Componente de "About"
import NavComponent from './Components/NavComponent'; // Importamos NavComponent

ReactDOM.render(
    <Router>
        <NavComponent /> {/* Renderizamos el componente de navegación */}
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/tasks" element={<TodoApp />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);
