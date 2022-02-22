 
comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
    let patronNumeroRegistro = /^[A-Z]{3}[0-9]{3}$/;
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

let elemento;
let tipo;
let resultadoCorrecto;

// COMPROBACIÓN numeroRegistro
tipo="numeroRegistro";

elemento= "ACD123";
resultadoCorrecto = true;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="AC123";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="ACGTHT123";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="145265";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="ACG124w";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);


// COMPROBACIÓN nombreCompleto
tipo="nombre";

elemento= "Fernández J.";
resultadoCorrecto = true;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="López Ariadna M.";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="Castillo JL.";
resultadoCorrecto = true;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="Castillo JSL.";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="López M";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="Martinez";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="J.";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

// COMPROBACIÓN numeroSS
tipo="numeroSS";

elemento= "010125789";
resultadoCorrecto = true;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="a14568892";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="A14589789";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="0148796";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

// COMPROBACIÓN direccion
tipo="direccion";

elemento= "C/Federico lorca, 50";
resultadoCorrecto = true;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="Av.Argentina, 123";
resultadoCorrecto = true;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="C/lorenzo, 3";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="Av.Gimenez Losantos, 40";
resultadoCorrecto = true;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="C/Almirante 45";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="C/Almirante";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);

elemento="C/45, 45";
resultadoCorrecto = false;
console.log(`Tipo de comprobacion: ${tipo} - Elemento a comprobar: ${elemento}\n` + 
        `Resultado correcto: ${resultadoCorrecto} - Resultado obtenido: ${comprobarPatrones(elemento, tipo)}`);
console.log (`\n`);