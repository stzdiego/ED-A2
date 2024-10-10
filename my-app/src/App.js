// src/App.jsx
import React from 'react';
import Counter from './Components/Counter'; // Importamos el componente Counter

const App = () => {
  return (
      <div>
        <h1>Aplicación de Contador</h1>
        <Counter /> {/* Usamos el componente Counter */}
      </div>
  );
};

export default App;
