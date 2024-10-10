import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../Helpers/AuthContext'; // Importar el contexto de autenticación

const NavComponent = () => {
    const { user, logout } = useAuth(); // Obtener el usuario y la función de logout

    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/todos">Todo</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                {user ? (
                    <>
                        <li>
                            <span>Hola, {user}</span> {/* Mostrar nombre de usuario */}
                        </li>
                        <li>
                            <button onClick={logout}>Cerrar Sesión</button>
                        </li>
                    </>
                ) : (
                    <li>
                        <Link to="/login">Iniciar Sesión</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavComponent;
