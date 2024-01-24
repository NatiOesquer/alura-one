let numeroMaximoPosible = 10;
 let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
 let numeroUsuario = 0;
 let intentos = 1;
 //let palabraVeces = 'vez';
let maximosIntentos = 3;


 while(numeroUsuario != numeroSecreto){ 
 numeroUsuario =parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor: `));
 console.log(numeroUsuario);

 if(numeroUsuario == numeroSecreto){
    alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez': 'veces'}` );
 }else{
   if(numeroUsuario > numeroSecreto){
      alert('El numero secreto es menor');
   }else{
      alert('El numero secreto es mayor')
   }
   //incrementamos el contador cuando no acierta.
   //intentos = intentos + 1;
   intentos++;
  // palabraVeces = 'veces';

   if(intentos > maximosIntentos){
      alert(`Llegaste al numero maximo ${maximosIntentos}  intentos`);
      break;
   }

    //alert('Lo siento, no acertaste el numero');
 }
}
// alert("¡Bienvenida y bienvenido a nuestro sitio web!");
// let nombre = "Luna";
// let edad = 25;
// let numeroDeVentas = 50;
// let SaldoDisponible = 1000;
// alert('¡Error! Completa todos los campos');
// let mensajeDeError ="¡Error! Completa todos los campos";
// alert(mensajeDeError);
// nombre = prompt("Ingrese su nombre");
// edad = prompt("Ingrese su edad");
// if(edad>18){
//     alert("¡Puedes obtener tu licencia de conducir!")
// }