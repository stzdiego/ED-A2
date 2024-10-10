// src/App.jsx
import React from 'react';
import ImageManager from './Components/ImageManager'; // Importa el gestor de imágenes

const App = () => {
    return (
        <div>
            <h1>Aplicación de Imágenes</h1>
            <ImageManager /> {/* Renderiza el gestor de imágenes */}
        </div>
    );
};

export default App;
