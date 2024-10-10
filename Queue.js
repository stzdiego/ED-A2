// Clase para representar la Cola
class Queue {
    constructor() {
        this.items = []; // Aquí almacenaremos los elementos (personas en este caso)
    }

    // Método para agregar una persona al final de la cola
    enqueue(person) {
        this.items.push(person); // Añadimos la persona al final del arreglo
    }

    // Método para remover a la primera persona de la cola (FIFO)
    dequeue() {
        if (this.isEmpty()) {
            return 'La cola está vacía'; // Si la cola está vacía, no podemos remover a nadie
        }
        return this.items.shift(); // shift remueve el primer elemento del arreglo y lo devuelve
    }

    // Método para ver quién es la primera persona en la cola sin removerla
    peek() {
        if (this.isEmpty()) {
            return 'La cola está vacía'; // Si la cola está vacía, no hay nadie para mostrar
        }
        return this.items[0]; // Devolvemos el primer elemento del arreglo (primera persona en la cola)
    }

    // Método para saber cuántas personas hay en la cola
    size() {
        return this.items.length; // La longitud del arreglo representa el tamaño de la cola
    }

    // Método para imprimir la cola
    print() {
        console.log(this.items); // Mostramos todas las personas en la cola
    }

    // Método auxiliar para verificar si la cola está vacía
    isEmpty() {
        return this.items.length === 0; // Si la longitud es 0, la cola está vacía
    }
}

module.exports = { Queue }; // Exportamos la clase para poder utilizarla en otros archivos