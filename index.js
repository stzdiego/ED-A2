// Clase Nodo que representa a una Persona o una Ciudad
class Nodo {
    constructor(nombre, tipo, edad = null) {
        this.nombre = nombre;  // Nombre del nodo (persona o ciudad)
        this.tipo = tipo;  // Tipo de nodo ('persona' o 'ciudad')
        this.edad = edad;  // Edad de la persona (solo aplica si es tipo 'persona')
        this.adjacencia = [];  // Lista de nodos adyacentes (amigos o ciudades)
    }

    // Método para agregar una referencia a otro nodo
    agregarAdyacente(nodo) {
        this.adjacencia.push(nodo);  // Añadimos el nodo a la lista de adyacencia
    }
}

// Clase Grafo que maneja el conjunto de nodos (personas y ciudades)
class Grafo {
    constructor() {
        this.nodos = [];  // Lista de nodos del grafo (personas y ciudades)
    }

    // Método para agregar una persona al grafo
    agregarPersona(nombre, edad, ciudad) {
        const persona = new Nodo(nombre, 'persona', edad);  // Creamos un nodo de tipo 'persona'
        const nodoCiudad = this.buscarNodo(ciudad, 'ciudad');  // Buscamos la ciudad en el grafo

        if (nodoCiudad) {
            persona.agregarAdyacente(nodoCiudad);  // Referenciamos la ciudad a la persona
            this.nodos.push(persona);  // Añadimos la persona al grafo
        } else {
            console.log(`La ciudad ${ciudad} no existe en el grafo.`);
        }
    }

    // Método para agregar una ciudad al grafo
    agregarCiudad(nombre) {
        const ciudad = new Nodo(nombre, 'ciudad');  // Creamos un nodo de tipo 'ciudad'
        this.nodos.push(ciudad);  // Añadimos la ciudad al grafo
    }

    // Método para buscar un nodo por su nombre y tipo (persona o ciudad)
    buscarNodo(nombre, tipo) {
        return this.nodos.find(nodo => nodo.nombre === nombre && nodo.tipo === tipo);
    }

    // Método para imprimir las personas que viven en una ciudad particular
    imprimirPersonasPorCiudad(ciudad) {
        const nodoCiudad = this.buscarNodo(ciudad, 'ciudad');  // Buscamos la ciudad en el grafo

        if (!nodoCiudad) {
            console.log(`La ciudad ${ciudad} no existe en el grafo.`);
            return;
        }

        console.log(`Personas que viven en ${ciudad}:`);
        this.nodos.forEach(nodo => {
            if (nodo.tipo === 'persona' && nodo.adjacencia.includes(nodoCiudad)) {
                console.log(`- ${nodo.nombre}, ${nodo.edad} años`);
            }
        });
    }
}

// Ejemplo de uso del grafo
const grafoAmigos = new Grafo();

// Agregamos algunas ciudades
grafoAmigos.agregarCiudad("Cali");
grafoAmigos.agregarCiudad("Bogotá");
grafoAmigos.agregarCiudad("Medellín");

// Agregamos algunas personas y las referenciamos a las ciudades donde viven
grafoAmigos.agregarPersona("Diego", 30, "Cali");
grafoAmigos.agregarPersona("Juan", 25, "Bogotá");
grafoAmigos.agregarPersona("Ana", 28, "Cali");
grafoAmigos.agregarPersona("Laura", 35, "Medellín");

// Imprimimos las personas que viven en Cali
grafoAmigos.imprimirPersonasPorCiudad("Cali");

// Imprimimos las personas que viven en Bogotá
grafoAmigos.imprimirPersonasPorCiudad("Bogotá");

// Imprimimos las personas que viven en Medellín
grafoAmigos.imprimirPersonasPorCiudad("Medellín");