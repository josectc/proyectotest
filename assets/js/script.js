
/*
//actividad hecha por el profesor con las estudiantes, ellas colaboran en la codificacion:
//comentar a las estudiantes que vamos a crear una funcion
//para hallar el area de una circunferencia.
//preguntar cual es el área y con ellas plantear como
//seria la formula(podemos usar la pizarra de zoom)
function areaCircunferencia(r){
    const pi = 3.14;
    area = pi*r*r;
    return area    
}

let radio = prompt('Ingresa el valor del radio: ');
resultado = areaCircunferencia(radio);
console.log(resultado); 
*/


/*
//el profesor y las estudiantes .
//utilizar if, else, prompt y console.log 
//crear un programa que permita decirnos si aprobamos un curso o no luego de ingresar la nota.
//si una nota mayor a 10 significa que 
//aprobaste un curso de lo contrario recomendar que estudie un poco más.
let nota = prompt("Introduce tu nota: ");
if (nota <= 10) {
        alert("Te recomiendo estudiar un poco más.");
}else if (nota > 10) {
        alert("Aprobaste!");
}
*/



//invitar a ellas que esto lo transformen en una función sólas. Les damos unos minutos.
/*
//se usa "valor" para que ellas no crean que deberia de llamarse igual que "nota" al crear la funcion
function estadoEstudiante(valor){
  if (valor <= 10) {
          alert("Te recomiendo estudiar un poco más.");
  }else if (valor > 10) {
          alert("Aprobaste!");
  }
}
let nota = prompt("Introduce tu nota: ");
estadoEstudiante(nota); 
*/

/*
//recordar a las estudiantes que de forma adicional podemos hacer una condicional que nos valide si el valor de la nota es mayor o igual a cero
//ya que no existe una nota negativa para un examen en este caso. Lo codificacmos con ellas:
function estadoEstudiante(valor){
  if(valor < 0){
    alert("Debes de ingresar una nota igual o superior a cero.")
  }else{
    if (valor <= 10) {
          alert("Te recomiendo estudiar un poco más.");
    }else if (valor > 10) {
          alert("Aprobaste!");
    }  
  }
}
let nota = prompt("Introduce tu nota: ");
estadoEstudiante(nota); 
*/


/*
//plantear a las estudiantes como validar que un usuario no ingrese un valor negativo como nota y la solicitud de ingresar dato siguen esperando el
//valor correcto. Realizar el ejercicio con las estudiantes. 
//Aprovechar y que ellas mismas de forma voluntaria comenten la solucion y nosotros codificar segun sus indicaciones. Una posible solución es la siguiente:
//es importante que se combine, funciones, bucles y condicionales para este fin
function estadoEstudiante(valor){      
      if(valor < 0){
      alert("Debes de ingresar una nota igual o superior a cero.")
      }else{
        if (valor <= 10) {
            alert("Te recomiendo estudiar un poco más.");
        }else if (valor > 10) {
            alert("Aprobaste!");
        }  
     }    
}

let nota;
do{
  nota = prompt("Introduce tu nota: ");
  estadoEstudiante(nota);   
}while(nota < 0); //en este while hay un problema, que si lo dejamos vacio sigue trabajando. Podemos agregar otra validacion: || nota == ""
//es decir quedaria (nota < 0 || nota == "")
//preguntar a las estudiantes que más seria bueno validar? si es texto o no, etc. Este proceso es un aspecto muy importante cuando 
//desarrollamos un sitio web.

*/


//Recordar con las estudiantes el tipo de dato que existen(primeras clases de JS: string, integer, boolean, etc.)
//para validar si un valor es un número entero.
//Este método devuelve verdadero si el valor es del tipo Número y un entero (un número sin decimales). De lo contrario, devuelve falso.

//res = Number.isInteger(20);
//console.log(res); //saldra true

//let nota = 16; //modificar esto con las estudiantes y que observen que resulta si cambio por un 14.5, "hola", etc. y vean como cambia el mensaje en consola.
//let res = Number.isInteger(nota);
//console.log(res);

//podemos realizar otros ejercicios adicionales

