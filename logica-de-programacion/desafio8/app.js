
// Función para calcular el índice de masa corporal (IMC)
function calcularIMC(peso, altura) {
  let imc = peso / (altura ** 2);
  return imc;
}

// Función para calcular el factorial de un número
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
      return 1;
  } else {
      return numero * calcularFactorial(numero - 1);
  }
}

// Función para convertir dólares a reales (considerando una cotización)
function convertirDolaresAReales(dolares) {
  let cotizacionDolar = 4.80;
  let reales = dolares * cotizacionDolar;
  return reales;
}

// Función para calcular área y perímetro de una sala rectangular
function calcularAreaYPerimetroRectangular(altura, anchura) {
  let area = altura * anchura;
  let perimetro = 2 * (altura + anchura);
  console.log("Área: " + area + " metros cuadrados");
  console.log("Perímetro: " + perimetro + " metros");
}

// Función para calcular área y perímetro de una sala circular
function calcularAreaYPerimetroCircular(radio) {
  let pi = 3.14;
  let area = pi * (radio ** 2);
  let perimetro = 2 * pi * radio;
  console.log("Área: " + area + " metros cuadrados");
  console.log("Perímetro: " + perimetro + " metros");
}

// Función para mostrar la tabla de multiplicar de un número
function mostrarTablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
  }
}

// Ejemplos de uso:
let imc = calcularIMC(70, 1.75);
console.log("IMC: " + imc);

let factorial5 = calcularFactorial(5);
console.log("Factorial de 5: " + factorial5);

let reales = convertirDolaresAReales(100);
console.log("100 dólares son aproximadamente " + reales + " reales");

calcularAreaYPerimetroRectangular(5, 8);

calcularAreaYPerimetroCircular(3);

mostrarTablaMultiplicar(7);
