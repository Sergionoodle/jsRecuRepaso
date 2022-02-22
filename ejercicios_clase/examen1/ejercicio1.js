const comprobarPatrones = function(elementoAComprobar, tipoComprobacion){
    let patronNumeroRegistro = /^[A-Z]{3}[0-9]{3}$/ //De la a a la z mayusculas 3 y numeros 3
    
    //De la a a la z con acentos mas una o dos letras mayus y acabado en .
    let patronNombreCompleto = /^[A-ZÁÉÍÓÚ][a-záéíóúü]+ [A-ZÁÉÍÓÚ]{1,2}\.$/

    //Del 0 al 9 un total de una a nueve veces
    let patronNumeroSS = /^[0-9]{1,9}$/

    //O C/ o AV. con mayusculas mas puede que otra palabra mas una coma con el numero que quieras
    let patronDireccion = /^(C\/|Av\.)[A-ZÁÉÍÓÚ][a-záéíóúü]+ ?[a-záéíóúü]*, [0-9]+$/

    
    let patrones = new Map([
        ['numeroRegistro', patronNumeroRegistro],
        ['nombre', patronNombreCompleto],
        ['numeroSS', patronNumeroSS],
        ['direccion', patronDireccion]

    ]);

    //Devolvemos el mapa de patrones que prueba los elementos 
    return patrones.get(tipoComprobacion).test(elementoAComprobar)
}
