// 1. Función que muestra "¡Hola, mundo!" en la consola.
function holaMundo() {
    console.log("¡Hola, mundo!");
}

// 2. Función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola.

function holaNombre(nombre) {
    nombre = prompt('Escribe tu nombre')
    console.log(`¡Hola, ${nombre}!`);
}

// 3. Función que recibe un número como parámetro y devuelve el doble de ese número.
function doble(numero) {
    return numero * 2;
}

// 4. Función que recibe tres números como parámetros y devuelve su promedio.
function promedio(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

// 5. Función que recibe dos números como parámetros y devuelve el mayor de ellos.
function mayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// 6. Función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero) {
    return numero * numero;
}

// Ejemplos de uso:
holaMundo();
holaNombre();
console.log("El doble de 5 es:", doble(5));
console.log("El promedio de 3, 6 y 9 es:", promedio(3, 6, 9));
console.log("El mayor entre 8 y 12 es:", mayor(8, 12));
console.log("El cuadrado de 4 es:", cuadrado(4));
