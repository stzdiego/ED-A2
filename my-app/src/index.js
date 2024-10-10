import React from 'react';
import { Provider } from 'react-redux'; // Importamos el Provider
import store from './Helpers/store'; // Importamos el store
import './index.css';
import App from './App';
import {createRoot} from "react-dom/client"; // Componente principal

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App /> {/* Renderizamos el componente principal */}
    </Provider>
);