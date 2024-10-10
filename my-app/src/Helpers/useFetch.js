import { useState, useEffect } from 'react';

const useFetch = (url) => {
    // Definimos los estados para los datos, la carga y el error
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); // Indicamos que la carga ha comenzado
            try {
                const response = await fetch(url); // Realizamos la solicitud
                if (!response.ok) {
                    throw new Error('Error al obtener los datos'); // Manejo de errores
                }
                const result = await response.json(); // Convertimos a JSON
                setData(result); // Guardamos los datos en el estado
            } catch (err) {
                setError(err.message); // Guardamos el mensaje de error
            } finally {
                setIsLoading(false); // Indicamos que la carga ha terminado
            }
        };

        fetchData(); // Llamamos a la función fetchData
    }, [url]); // Ejecutar de nuevo si la URL cambia

    return { data, isLoading, error }; // Retornamos los estados
};

export default useFetch;
