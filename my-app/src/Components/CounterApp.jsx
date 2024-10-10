import React from 'react';
import useCounter from '../Helpers/useCounter'; // Importamos el Custom Hook

const CounterApp = () => {
    const { count, increment, decrement, reset } = useCounter(10); // Usamos el Custom Hook con un valor inicial de 10

    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={reset}>Reiniciar</button>
        </div>
    );
};

export default CounterApp;
