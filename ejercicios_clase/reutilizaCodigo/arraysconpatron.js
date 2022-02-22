comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
    let patronNumeroRegistro = /^[0-9]{0,6}$/;
    let patronNombreCompleto = /^[A-ZÁÉÍÓÚÇ][a-záéíóúü]+ [A-ZÁÉÍÓÚÇ]{1,2}\.$/;
    let patronNumeroSS = /^[0-9]{1,9}$/;
    let patronDireccion = /^(C\/|Av\.)[A-ZÁÉÍÓÚÇ][a-záéíóúü]+ ?[a-záéíóúü ]*, [0-9]+$/;

    let patrones = new Map([
        ['numeroRegistro', patronNumeroRegistro],
        ['nombre', patronNombreCompleto],
        ['numeroSS', patronNumeroSS],
        ['direccion', patronDireccion]
    ]);
        
    return patrones.get(tipoComprobacion).test(elementoAComprobar);
}

//Hacemos todas las combinaciones que tienen que ir en la prueba mas su resultado
let listaCombinaciones = [
    ["ACD123", "numeroRegistro", true],
    ["AC123", "numeroRegistro", false],
    ["ACGTHT123", "numeroRegistro", false],
    ["145265", "numeroRegistro", false],
    ["ACG124w", "numeroRegistro", false],
    ["Fernández J.", "nombre", true],
    ["López Ariadna M.", "nombre", false],
    ["Castillo JL.", "nombre", true],
    ["Castillo JSL.", "nombre", false],
    ["López M", "nombre", false],
    ["Martinez", "nombre", false],
    ["J.", "nombre", false],
    ["010125789", "numeroSS", true],
    ["a14568892", "numeroSS", false],
    ["A14589789", "numeroSS", false],
    ["0148796", "numeroSS", false],
    ["C/Federico lorca, 50", "direccion", true],
    ["Av.Argentina, 123", "direccion", true],
    ["C/lorenzo, 3", "direccion", false],
    ["Av.Gimenez Losantos, 40", "direccion", true],
    ["C/Almirante 45", "direccion", false],
    ["C/Almirante", "direccion", false],
    ["C/45, 45", "direccion", false],
    ["Tocuato luca, 45", "direccion", false],
]

let elemento;
let tipo;
let resultadoCorrecto;

for(let i = 0; i < listaCombinaciones.length; i++){
    //El elemento es la parte 0 de la lista de combinaciones
    elemento = listaCombinaciones[i][0]
    //El tipo es la posicion 1 de la array bidimensional
    tipo = listaCombinaciones[i][1]
    //La respuesta correcta esta en la ultima posicion
    resultadoCorrecto = listaCombinaciones[i][2]

    //El resultado que no se tiene que repetir y tiene que salir por pantalla
    console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
    `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
    console.log (`\n`);
    
}