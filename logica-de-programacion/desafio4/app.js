
// Desafío 1
console.log("¡Bienvenido!");

// Desafío 2
var nombre = "TuNombre";
console.log("¡Hola, " + nombre + "!");

// Desafío 3
var nombre = "TuNombre";
alert("¡Hola, " + nombre + "!");

// Desafío 4
var respuesta = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log("Tu lenguaje favorito es: " + respuesta);

// Desafío 5
var valor1 = 5;
var valor2 = 10;
var resultado = valor1 + valor2;
console.log("La suma de " + valor1 + " y " + valor2 + " es igual a " + resultado + ".");

// Desafío 6
var valor1 = 15;
var valor2 = 8;
var resultado = valor1 - valor2;
console.log("La diferencia entre " + valor1 + " y " + valor2 + " es igual a " + resultado + ".");

// Desafío 7
var edad = prompt("¿Cuál es tu edad?");
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Desafío 8
var numero = prompt("Ingresa un número");
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

// Desafío 9
var contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// Desafío 10
var nota = 8;
if (nota >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

// Desafío 11
var numeroAleatorio = Math.random();
console.log("Número aleatorio: " + numeroAleatorio);

// Desafío 12
var numeroEntero = Math.floor(Math.random() * 10) + 1;
console.log("Número entero entre 1 y 10: " + numeroEntero);

// Desafío 13
var numeroEntero = Math.floor(Math.random() * 1000) + 1;
console.log("Número entero entre 1 y 1000: " + numeroEntero);
