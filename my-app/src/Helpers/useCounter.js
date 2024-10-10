import { useState } from 'react';

const useCounter = (initialValue = 0) => {
    // Estado para el contador
    const [count, setCount] = useState(initialValue);

    // Función para incrementar el contador
    const increment = () => {
        setCount(count + 1);
    };

    // Función para decrementar el contador
    const decrement = () => {
        setCount(count - 1);
    };

    // Función para reiniciar el contador
    const reset = () => {
        setCount(initialValue);
    };

    // Retornamos el estado y las funciones
    return { count, increment, decrement, reset };
};

export default useCounter;
