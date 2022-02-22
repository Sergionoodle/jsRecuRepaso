//Cadena que usaremos para hacer prubas
let cadena = "cadena de prueba";
let cadena2 = "cadena";

resultado = cadena.startsWith(cadena2);//Verificamos si empieza con la misma
//Palabra o cadena, y endsWith al reves

let cadenaInclude = "cadena que incluye";
resultado2 = cadenaInclude.includes("que");
//Nos dice si incluye o no la palabra que

let index = "cadena index Off";
resultado3 = index.indexOf("index"); 
//Nos muestra la posicion donde empieza lo que le pasamos 
//Si le damos resultado[1] te enseña la posicion 1 es decir su letra

resultado4 = index.padStart(10,"!")//Pondra tantos ! como necesite por el 
//Principio para que llegue a 10 caracteres, lo mismo seria con padEnd

resultado = index.repeat(4);//Nos repetira index un total de x veces


//////////////////////////////////////////////////
//Dividir con el split
let splitcadena = "Hola, Como, eh";

resultado5 = cadena.split(",") //Cada vez que encuentre la coma lo separará y sera
//Una array

resultado6 = index.substring(0,2); //saca la posicion de la 0 a la 2 (ind)






