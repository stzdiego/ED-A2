import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element }) => {
    const user = useSelector((state) => state.auth.user); // Obtener el usuario del estado de Redux

    if (user) {
        return element; // Si el usuario está autenticado, retornamos el elemento (ruta protegida)
    } else {
        return <Navigate to="/login" replace />; // Usar 'replace' para no dejar rastro en el historial
    }
};

export default PrivateRoute;
