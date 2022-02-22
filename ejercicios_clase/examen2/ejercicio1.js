//Saca bolas del abecedario
const arrayAbecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const mapaAbecedarioUnicode = new Map();

//Sacamos las bolas que necesitamos en total
let contador = 0;
for (let i=9398; i<=9423; i++) {
    mapaAbecedarioUnicode.set(`${arrayAbecedario[contador]}`, `&#${i}`);
    contador++;
}

//Cuantas queremos mostrar
let cantidadLetrasMostrar = 20;

//Declaramos variables
let numeroAleatorio = 0;
let arrayLetrasSalida = new Array();
let arrayLetrasSalidaOrdenadas = new Array();
let setLetrasSinRepetir = new Set();

//Recorremos las que queremos mostrar y las sacamos y añadimos al set(orden) y a la array normal
for(let i = 1; i <= cantidadLetrasMostrar; i++){
    numeroAleatorio = numeroAleatorioEntreDosNum(0, arrayAbecedario.length - 1);
    arrayLetrasSalida.push(arrayAbecedario[numeroAleatorio]);
    setLetrasSinRepetir.add(arrayAbecedario[numeroAleatorio]);
}

//Devuelve una copia
arrayLetrasSalidaOrdenadas = arrayLetrasSalida.slice()
//Ahora ordenamos la copia
arrayLetrasSalidaOrdenadas.sort()

document.write(`<h1>${arrayLetrasSalida.length} lletres aleatòries</h1>`)
document.write(`<p>`);

//Sacamos el mapa unicode sin ordenar
for(let letra of arrayLetrasSalida){
    document.write(mapaAbecedarioUnicode.get(letra))
}

document.write(`<\p>`);
document.write(`<h1>Lletres ordenades</h1>`)

//Lo sacamos ordenado 
for(let letra of arrayLetrasSalidaOrdenadas){
    document.write(mapaAbecedarioUnicode.get(letra))
}

document.write(`<h1>${setLetrasSinRepetir.size} lletres sense repetir</h1>`);
document.write(`<p>`);

//Sacamos las letras sin repetir 
for(let letra of setLetrasSinRepetir){
    document.write(mapaAbecedarioUnicode.get(letra));

}

document.write("</p>")