import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto
const AuthContext = createContext();

// Componente Provider para manejar el estado de autenticación
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [lastVisitedPage, setLastVisitedPage] = useState('/');

    const login = (username) => {
        setUser(username);
        setLastVisitedPage(window.location.pathname); // Guardar la última página visitada
    };

    const logout = () => {
        setUser(null);
        window.location.pathname = '/'; // Redirigir a la página principal al cerrar sesión
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, lastVisitedPage }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar el contexto
export const useAuth = () => {
    return useContext(AuthContext);
};
