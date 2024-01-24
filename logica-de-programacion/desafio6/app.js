let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora Del Desafío';

function consola(){
    alert('El botón fue clicado');
    console.log('El botón fue clicado');
}

function botonPromp(){
    let ciudad = prompt('Escribe el nombre de una ciudad de Brasil');
    if (ciudad){
        alert(`Estuve en ${ciudad} y me acorde de tí`);
    }

}

function mostrarJSAlerta() {
    alert('Yo amo JS');
}

function mostrarAlerta() {
    alert('El botón fue clicado');
}

function suma() {
    let num1 = prompt('Ingrese el primer número');
    let num2 = prompt('Ingrese el segundo número');

    if (num1 !== null && num2 !== null) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (!isNaN(num1) && !isNaN(num2)) {
            let resultado = num1 + num2;
            alert(`La suma de ${num1} y ${num2} es: ${resultado}`);
        } else {
            alert('Por favor, ingrese números válidos.');
        }
    } else {
        alert('Se canceló la operación.');
    }
}