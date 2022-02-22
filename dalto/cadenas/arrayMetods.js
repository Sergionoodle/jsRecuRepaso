let nombre = ['pedro','maria'];

resultado = nombre.pop() //-> elimina el ultimo valor de la array
resultado = nombre.shift() //->elimina la primera posicion del array
resultado = nombre.push("javier")//->lo que hace es añadirle el valor que le metemos
resultado = nombre.unshift("pepe")//->lo mismo que push pero al principio

////////////////////////

let numeros = [1,4,2,3];

numeros.sort()//->Ordena de manera alfabetica o de manera numerica
resultado.splice('pedro',3)//->si quieres agregar le pones ('xx',3,agregado,agregado)
            //Donde arrancamos - los elementos a eliminar desde donde arrancas

//Ordenar sin eliminar se hace por el principio (pos 0) o se pone por el final
//(pos -1)

//METODOS ACCESORES////
let resultado = numeros.join("_")//Se crea una cadena de texto, y segun lo que metas
//Te hará una cadena de texto separando por _ es decir -> 1_2_3 ...

let resultado = numeros.slice(0,2)//Nos mostrara del elemento x al elemento y
//con 0, -1 saca todo menos el ultimo 

let resultado = numeros.indexOf(1)//Nos saca la posicion donde se encuentra
//el valor que le pasamos 
//lastIndexOf -> saca la palabra desde atras (posicion)