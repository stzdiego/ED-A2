const { Queue } = require("./Queue");

const atmQueue = new Queue();

// Personas que llegan al ATM (nombre y hora de llegada)
const person1 = { name: "Juan", arrivedTime: "10:00 AM" };
const person2 = { name: "María", arrivedTime: "10:05 AM" };
const person3 = { name: "Carlos", arrivedTime: "10:10 AM" };

// Llenamos la cola con los ejemplos
atmQueue.enqueue(person1);
atmQueue.enqueue(person2);
atmQueue.enqueue(person3);

// Imprimir la cola para verificar
atmQueue.print(); // Mostrará: [{name: "Juan", arrivedTime: "10:00 AM"}, {name: "María", arrivedTime: "10:05 AM"}, {name: "Carlos", arrivedTime: "10:10 AM"}]

// Verificar quién es la primera persona en la cola (sin eliminarla)
console.log(atmQueue.peek()); // Mostrará: {name: "Juan", arrivedTime: "10:00 AM"}

// Remover a la primera persona (FIFO)
atmQueue.dequeue(); // Remueve a "Juan"

// Imprimir la cola actualizada
atmQueue.print(); // Mostrará: [{name: "María", arrivedTime: "10:05 AM"}, {name: "Carlos", arrivedTime: "10:10 AM"}]

// Ver el tamaño de la cola
console.log(atmQueue.size()); // Mostrará: 2
