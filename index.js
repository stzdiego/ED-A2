// Clase Nodo que representa cada tarea (TODO)
class Nodo {
    constructor(titulo, descripcion) {
        this.titulo = titulo;  // El título de la tarea
        this.descripcion = descripcion;  // La descripción de la tarea
        this.siguiente = null;  // Puntero al siguiente nodo (tarea)
    }
}

// Clase ListaEnlazada para manejar la lista de tareas
class ListaEnlazada {
    constructor() {
        this.cabeza = null;  // El primer nodo de la lista (cabeza)
        this.tamano = 0;  // El tamaño de la lista
    }

    // Método para añadir una tarea al final de la lista
    append(titulo, descripcion) {
        const nuevaTarea = new Nodo(titulo, descripcion);  // Creamos un nuevo nodo (tarea)

        if (this.cabeza === null) {  // Si la lista está vacía
            this.cabeza = nuevaTarea;  // La nueva tarea es la cabeza de la lista
        } else {
            let actual = this.cabeza;
            while (actual.siguiente) {  // Recorremos hasta encontrar el último nodo
                actual = actual.siguiente;
            }
            actual.siguiente = nuevaTarea;  // Añadimos la nueva tarea al final
        }
        this.tamano++;  // Aumentamos el tamaño de la lista
    }

    // Método para imprimir todas las tareas
    imprimirLista() {
        if (this.cabeza === null) {
            console.log("La lista está vacía");  // Si la lista está vacía
            return;
        }

        let actual = this.cabeza;
        while (actual) {  // Recorremos cada nodo y lo imprimimos
            console.log(`Tarea: ${actual.titulo}, Descripción: ${actual.descripcion}`);
            actual = actual.siguiente;
        }
    }

    // Método para devolver el tamaño de la lista
    size() {
        return this.tamano;  // Devolvemos el número total de tareas
    }

    // Método para eliminar una tarea por su título
    eliminar(titulo) {
        if (this.cabeza === null) {
            console.log("La lista está vacía, no hay tareas que eliminar");
            return;
        }

        if (this.cabeza.titulo === titulo) {  // Si la tarea a eliminar es la primera
            this.cabeza = this.cabeza.siguiente;
            this.tamano--;
            console.log(`Tarea "${titulo}" eliminada`);
            return;
        }

        let actual = this.cabeza;
        let anterior = null;

        while (actual && actual.titulo !== titulo) {  // Buscamos la tarea a eliminar
            anterior = actual;
            actual = actual.siguiente;
        }

        if (actual === null) {  // Si no encontramos la tarea
            console.log(`Tarea "${titulo}" no encontrada`);
            return;
        }

        anterior.siguiente = actual.siguiente;  // Eliminamos la tarea enlazando el anterior con el siguiente
        this.tamano--;
        console.log(`Tarea "${titulo}" eliminada`);
    }
}

// Ejemplo de uso de la lista de tareas (TODO list)
const listaTareas = new ListaEnlazada();

// Agregamos algunas tareas de ejemplo
listaTareas.append("Comprar víveres", "Ir al supermercado y comprar frutas y verduras");
listaTareas.append("Estudiar JavaScript", "Repasar clases y objetos en JavaScript");
listaTareas.append("Ejercicio", "Hacer 30 minutos de ejercicio en casa");

// Imprimimos la lista de tareas
listaTareas.imprimirLista();

// Eliminamos una tarea
listaTareas.eliminar("Estudiar JavaScript");

// Imprimimos la lista actualizada
listaTareas.imprimirLista();