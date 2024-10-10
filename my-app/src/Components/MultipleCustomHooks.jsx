import React from 'react';
import useFetch from '../Helpers/useFetch'; // Importamos el Custom Hook useFetch
import useCounter from '../Helpers/useCounter'; // Importamos el Custom Hook useCounter

const MultipleCustomHooks = () => {
    const { count, increment } = useCounter(1); // Comenzamos el contador en 1
    const { data, isLoading, error } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${count}`); // Usamos el Custom Hook useFetch

    if (isLoading) {
        return <h2>Cargando...</h2>; // Mensaje de carga
    }

    if (error) {
        return <h2>Error: {error}</h2>; // Mensaje de error
    }

    return (
        <div>
            <h1>Cita de Breaking Bad</h1>
            {data && (
                <blockquote>
                    <p>{data[0].quote}</p>
                    <footer>{data[0].author}</footer>
                </blockquote>
            )}
            <button onClick={increment}>Obtener otra cita</button>
        </div>
    );
};

export default MultipleCustomHooks;
