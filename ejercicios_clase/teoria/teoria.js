//boleanos --> dan true o false 
/* ARITMETICOS */
//Suma
console.log(5 + 4.5);
//Resta
console.log(4 - 4.5);
//Multiplicación
console.log(5 * 4.5);
//División
console.log(7/3);
//Resto
console.log(7%3);
//Exponente
console.log(3 ** 2);
//La contra barra se suele utilizar para poder usar los caracteres especiales
//Con la funcion typeof(algo ) -> sacas el tipo que es esa variable introducida
//String, int....
//El confirm("SEGURO?") -> devuelve un boleano si le das si true si le das no false

//Numeros aleatorios
Math.random() //Entre 0 y 1 
Math.random() * 2 //Entre 0 y dos
Math.random() * 4 + 6 //Entre el 6 y el 10 
Math.random() * 11 //Entre el 0 y el 10
Math.random() * 5 + 6 //Entre el 6 y el 10 


//Los sets, no duplica valores y son objetos
const lista = new Set() //Declaracion de un set

//Se añade con add
lista.add("HOLA")
//Se puede añadir una array dentro
lista.add([1,2,3])
//Para calcular la grandaria .size
lista.size //-> lo que mide como el .length
//Eliminar valor
lista.delete(/*valor a eliminar*/"HOLA")
//Eliminar todo clear()
lista.clear();
//Si tiene algo de lo que le pases da true o false
lista.has(5) //-> si tiene un 5

//Pasar a array
arraylista = [...lista]
//Ahora es una array

//Con for(let a of lista){} recorremos todo 

//STRING 
//Con charAt(5) -> sale la letra de la posicion 5
//con indexOf("x") -> sale donde esta (posicion) la letra x 
//Con lastIndexOf seria por la derecha y empieza a contar
//Con endsWith("hoal") // acaba con hoal?¿
//Replace(sustituto, asustituir)
//trim quita espacios
//slice(3, 4) //Corta del 3 al 4 (posicion) y split("quequierescortar", cuanto(opcional))

//ARRAYS ->
let a = [] 
let b = new Array()
//Segun lo que pongase dentro de los [] es la posicion del array

//con delete a[1] -> borras la posicion 1 de la array
a[0] = "MARIA"
//Con una array de arrays
const a5 = [3,4,'Hola',[99,55,33]]; // También puede contener otros arrays
console.log(a5[3][1]); // Salida: 55

//Con for(let i in array) se recorren las arrays se salta los undefined
//Con for(let i of array) recorremos igualmente no se salta los undefined

// Método INSTANCEOF
// Sirve para comprobar si un objeto pertenece a una determinada clase
// Los arrays pertenecen a la clase Array.

let a = [1,2,3,4,5,6,7,8,9];
let b = 'Hola';
console.log(a instanceof Array); // Salida: true
console.log(b  instanceof Array); // Salida: false

//Añadir un elemento al final de la array 
a.push("SIMON")
//Retirar el ultimo elemento 
a.pop()
//El primer elemento
a.shift()
//Añadir un elemento al princiio
a.unshift("PEPE")
// Método SLICE
// Permite copiar una serie de elementos de un array indicando
// el índice del primer elemento que deseamos copiar y el índice final.

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 
                'Viernes', 'Sábado', 'Domingo'];
const tresdias =  dias.slice(3,6);
console.log(tresdias); // Salida: [ 'Jueves', 'Viernes', 'Sábado' ]
// También se puede utilizar para copiar un array a otro
let dias2 = dias.slice(); // También se puede utilizar para copiar un array a otro
console.log(dias2); // Salida: [ 'Lunes', 'Martes'. 'Miércoles','Jueves', 'Viernes', 'Sábado' ]
dias2[0] = '1';
console.log(dias);
console.log(dias2);

//Splite eliminamos los elementos 
castillo.splice(1,2)//Eliminamos los elementos que hay en la posicion 1 y 2
//Si le metemos nombres nos añade

//Con joain la array se combierte en string y esta se va sustituyendo
a.join()//Se pone entre comas a,b,c
a.join(" ")//Se pone con espacois a b c 
//Y asi podemos ir cambiando con - o lo que queramos 

//Last index of nos enseña la ultima posicion de lo que le pasemos
//Includes("ALGO") -> es para saber si la array incluye esto
//reverse() ->Le daria la vuleta a la array
//El metodo sort() ordenaria

//MAPA
const provincias = new Map()//ASI SE DECLARA
provincias.set(1,"Mallorca") // Asi se añade
//Ten en cuenta que tiene una estructura de clave valor, y la clave no se 
//Tiene que repetir
//new Map([1,sergio][2,pepe])

//Con has nos preguntamos si lo tiene o no
provincias.has("Mallorca") // true

//Se puede recorrer tal que asi
let claves = provincias.keys();
for(let k of claves){
    console.log(k)
}
let valor = provincias.values();
for(let v of valor){
    console.log(v)
}
for(let elementos of provincias){
    console.log(elementos)
}
for(let[clave, valor] of provincias){
    console.log(clave+"   "+valor)
}
for (let clave of provincias.keys()) {
    console.log(clave);
}
for (let valor of provincias.values()) {
    console.log(valor);
}

//EXPRESIONES REGULARES
// Expresión que permite validar un NIF o un NIE como correcto
//[KLXYZ0-9][0-9]{7}[A-Z]

//COn /c/ si contiene una c dara true, OJO cuidado que se distingue entre mayusculas
//Si los ponemos /as/ buscara que se tenga un as dentro de alguna palabra o lo que comprobemos
// Con ^ obligamos a que el primer simbolo sea el que vaya a continuacion
//Con $ hacemos que el caracter anterior a este sea obligatorio
//El . representa un caracter cualquiera (solo 1 por punto) a menos que uses contra barra
//Entre [] seria un simbolo opcional
//Si ponemos [^ABC] // Que no empiece con ABC
//Con x+ la expresion de la izquierda se repite una o mas veces (.+) varios caractres cualquiera
//Con x* se puede repetir de 0 a las que quieras
//Con x? el caracter se puede repetir de 0 a 1 vez

