comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
    let patronNumeroRegistro = /^[A-Z]{3}[0-9]{3}$/;
    let patronNombreCompleto = /^[A-ZÁÉÍÓÚÇ][a-záéíóúü]+ [A-ZÁÉÍÓÚÇ]{1,2}\.$/;
    let patronNumeroSS = /^[0-9]{9}$/;
    let patronDireccion = /^(C\/|Av\.)[A-ZÁÉÍÓÚÇ][a-záéíóúü]+ ?[a-záéíóúü ]*, [0-9]+$/;

    let patrones = new Map([
        ['numeroRegistro', patronNumeroRegistro],
        ['nombre', patronNombreCompleto],
        ['numeroSS', patronNumeroSS],
        ['direccion', patronDireccion]
    ]);
        
    return patrones.get(tipoComprobacion).test(elementoAComprobar);
}

//Creamos el json con el tipo, el elemento y el resultado correcto
const jsonComprobaciones = {
    "numeroRegistro" : {
        "ACD123" : true,
        "AC123" : false,
        "ACGTHT123" : false,
        "145265" : false,
        "ACG124w" : false
    },
    "nombre" : {
        "Fernández J." : true,
        "López Ariadna M." : false,
        "Castillo JL." : true,
        "Castillo JSL." : false,
        "López M" : false,
        "Martinez" : false,
        "J." : false
    },
    "numeroSS" : {
        "010125789" : true,
        "a14568892" : false,
        "A14589789" : false,
        "0148796" : false,
    },
    "direccion" : {
        "C/Federico lorca, 50" : true,
        "Av.Argentina, 123" : true,
        "C/lorenzo, 3" : false,
        "Av.Gimenez Losantos, 40" : false,
        "C/Almirante 45" : false,
        "C/Almirante" : false,
        "C/45, 45" : false,
        "Tocuato luca, 45" : false,
    }
};

let objetoComprobacion = new Objeto()
objetoComprobacion = Object.assign(objetoComprobacion, jsonComprobaciones)

arrayTiposComprobaciones = Object.keys(jsonComprobaciones)

let elemento;
let tipo;
let resultadoCorrecto;

//Recorremos y le damos los valores 
for (let tipo of arrayTiposComprobaciones){
    arrayElementosAComprobar = Object.keys(jsonComprobaciones[tipo]);
    for (let elemento of arrayElementosAComprobar) {
        resultadoCorrecto = jsonComprobaciones[tipo][elemento];
        console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
        console.log (`\n`);
    }
}