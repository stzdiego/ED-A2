import React from 'react';

const TodoList = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li> // Mostramos cada tarea
            ))}
        </ul>
    );
};

export default TodoList;
