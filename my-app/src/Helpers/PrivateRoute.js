import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element }) => {
    const { user } = useAuth(); // Obtener el usuario del contexto

    // Retornamos un Route que redirige a la página de login si no hay usuario
    return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
