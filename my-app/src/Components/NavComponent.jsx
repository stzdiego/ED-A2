import React from 'react';
import { NavLink } from 'react-router-dom'; // Importamos NavLink para la navegación

const NavComponent = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'active' : undefined)} // Estilo para la ruta activa
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/tasks"
                        className={({ isActive }) => (isActive ? 'active' : undefined)} // Estilo para la ruta activa
                    >
                        Tareas
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? 'active' : undefined)} // Estilo para la ruta activa
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavComponent;
