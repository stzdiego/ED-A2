// Clase Pila de Libros
class PilaLibros {
    constructor() {
        this.pila = [];  // Creamos un array vacío para almacenar los libros
    }

    // Método para agregar un nuevo libro a la pila
    push(libro) {
        this.pila.push(libro);  // Añadimos el libro al final del array
    }

    // Método para quitar y devolver el último libro añadido (LIFO)
    pop() {
        if (this.pila.length === 0) {
            console.log("La pila está vacía");  // Si la pila está vacía, no podemos quitar un libro
            return null;
        }
        return this.pila.pop();  // Quitamos y devolvemos el último libro
    }

    // Método para ver el último libro sin quitarlo de la pila
    peek() {
        if (this.pila.length === 0) {
            console.log("La pila está vacía");
            return null;
        }
        return this.pila[this.pila.length - 1];  // Devolvemos el último libro
    }

    // Método para conocer el número de libros en la pila
    size() {
        return this.pila.length;  // Devolvemos el tamaño de la pila
    }

    // Método para imprimir los detalles de todos los libros en la pila
    imprimirPila() {
        if (this.pila.length === 0) {
            console.log("La pila está vacía");
            return;
        }

        console.log("Pila de libros:");
        this.pila.forEach((libro, index) => {
            console.log(`Libro ${index + 1}: Nombre: ${libro.nombre}, ISBN: ${libro.isbn}, Autor: ${libro.autor}, Editorial: ${libro.editorial}`);
        });
    }
}

// Ejemplo de uso
const pilaLibros = new PilaLibros();

// Crear algunos libros de ejemplo
const libro1 = { nombre: "Cien años de soledad", isbn: "978-84-376-0494-7", autor: "Gabriel García Márquez", editorial: "Sudamericana" };
const libro2 = { nombre: "El amor en los tiempos del cólera", isbn: "978-84-376-0495-4", autor: "Gabriel García Márquez", editorial: "Sudamericana" };
const libro3 = { nombre: "Crónica de una muerte anunciada", isbn: "978-84-376-0496-1", autor: "Gabriel García Márquez", editorial: "Sudamericana" };

// Agregar los libros a la pila
pilaLibros.push(libro1);
pilaLibros.push(libro2);
pilaLibros.push(libro3);

// Imprimir la pila de libros
pilaLibros.imprimirPila();

// Ver el último libro añadido sin quitarlo
console.log("Último libro añadido:", pilaLibros.peek());

// Quitar el último libro de la pila
console.log("Libro quitado:", pilaLibros.pop());

// Imprimir la pila actualizada
pilaLibros.imprimirPila();