
//punto 1: Saludo según el día de la semana

let diaSemana = prompt("¿Qué día de la semana es?");
if (diaSemana.toLowerCase() === "sábado" || diaSemana.toLowerCase() === "domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

//punto 2: Verificar si un número es positivo o negativo

let numero = parseFloat(prompt("Ingresa un número:"));
if (numero > 0) {
    alert("El número es positivo.");
} else if (numero < 0) {
    alert("El número es negativo.");
} else {
    alert("El número es cero.");
}

//punto 3: Sistema de puntuación para un juego

let puntuacion = parseInt(prompt("Ingresa tu puntuación:"));
if (puntuacion >= 100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Intenta nuevamente para ganar.");
}

//punto 4: Informe de saldo de cuenta con template string

let saldo = 1500; // Puedes cambiar esto con el saldo real del usuario
alert(`Tu saldo actual es de $${saldo}.`);


//punto 5: Mensaje de bienvenida con el nombre del usuario

let nombreUsuario = prompt("Ingresa tu nombre:");
alert(`¡Bienvenido, ${nombreUsuario}!`);


