// src/Components/NavComponent.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; // Importa useDispatch
import { clearUser } from '../Store/authSlice'; // Importa la acción para limpiar el usuario
import { auth } from '../firebaseConfig'; // Importa la configuración de Firebase
import { signOut } from 'firebase/auth'; // Importa la función de signOut

const NavComponent = () => {
    const user = useSelector((state) => state.auth.user); // Obtener el usuario del estado de Redux
    const dispatch = useDispatch(); // Hook para despachar acciones

    const handleLogout = async () => {
        try {
            await signOut(auth); // Cierra sesión con Firebase
            dispatch(clearUser()); // Limpia el usuario en el estado de Redux
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/todos">Todos</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                {user ? (
                    <>
                        <li>
                            <span>Hola, {user.email}</span>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Cerrar Sesión</button> {/* Botón de Logout */}
                        </li>
                    </>
                ) : (
                    <li>
                        <NavLink to="/login">Iniciar Sesión</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavComponent;
