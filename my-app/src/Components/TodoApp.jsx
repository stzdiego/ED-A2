import React, { useState } from 'react';
import TodoList from './TodoList'; // Importamos el componente TodoList
import TodoForm from './TodoForm'; // Importamos el componente TodoForm

const TodoApp = () => {
    const [todos, setTodos] = useState([]); // Estado para la lista de tareas

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]); // Agrega la nueva tarea a la lista
    };

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <TodoForm addTodo={addTodo} /> {/* Pasamos la función addTodo como prop */}
            <TodoList todos={todos} /> {/* Pasamos la lista de tareas como prop */}
        </div>
    );
};

export default TodoApp;
