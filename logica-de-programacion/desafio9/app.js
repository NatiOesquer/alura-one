
// Paso 1: Crear una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// Paso 2: Crear una lista de lenguajes de programación llamada "lenguagesDeProgramacion".
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Paso 3: Agregar elementos a la lista "lenguagesDeProgramacion".
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Paso 4: Función para mostrar todos los elementos de la lista "lenguagesDeProgramacion".
function mostrarLenguajes() {
    console.log("Lenguajes de Programación:");
    for (let lenguaje of lenguajesDeProgramacion) {
        console.log(lenguaje);
    }
}

// Paso 5: Función para mostrar todos los elementos en orden inverso.
function mostrarEnOrdenInverso() {
    console.log("Lenguajes de Programación en Orden Inverso:");
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }
}

// Paso 6: Función para calcular el promedio de los elementos en una lista de números.
function calcularPromedio(listaNumeros) {
    let suma = 0;
    for (let numero of listaNumeros) {
        suma += numero;
    }
    return suma / listaNumeros.length;
}

// Paso 7: Función para mostrar el número más grande y el más pequeño en una lista.
function mostrarMinMax(listaNumeros) {
    let maximo = Math.max(...listaNumeros);
    let minimo = Math.min(...listaNumeros);
    console.log("Número más grande:", maximo);
    console.log("Número más pequeño:", minimo);
}

// Paso 8: Función para devolver la suma de todos los elementos en una lista.
function calcularSuma(listaNumeros) {
    return listaNumeros.reduce((suma, numero) => suma + numero, 0);
}

// Paso 9: Función para encontrar la posición de un elemento en la lista.
function encontrarPosicion(elemento, lista) {
    let posicion = lista.indexOf(elemento);
    return posicion !== -1 ? posicion : -1;
}

// Paso 10: Función para sumar elementos uno a uno de dos listas.
function sumarListas(lista1, lista2) {
    return lista1.map((valor, index) => valor + lista2[index]);
}

// Paso 11: Función para calcular el cuadrado de cada número en una lista.
function calcularCuadrado(listaNumeros) {
    return listaNumeros.map(numero => numero * numero);
}

// Ejemplos de uso:
mostrarLenguajes();
mostrarEnOrdenInverso();
console.log("Promedio:", calcularPromedio([1, 2, 3, 4, 5]));
mostrarMinMax([10, 5, 8, 2, 7]);
console.log("Suma:", calcularSuma([1, 2, 3, 4, 5]));
console.log("Posición de 'C++':", encontrarPosicion('C++', lenguajesDeProgramacion));
console.log("Suma de listas:", sumarListas([1, 2, 3], [4, 5, 6]));
console.log("Cuadrados:", calcularCuadrado([2, 4, 6, 8]));
