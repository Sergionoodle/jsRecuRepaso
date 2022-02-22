const Paciente = function(numeroRegistro, nombreCompleto, numeroSS, direccion){

    //Hacemos la funcion de antes comprovar patrones
    this.comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
        let patronNumeroRegistro = /^[A-Z]{3}[0-9]{3}$/;
        let patronNombreCompleto = /^[A-ZÁÉÍÓÚÇ][a-záéíóúü]+ [[A-ZÁÉÍÓÚÇ]{1,2}\.$/;
        let patronNumeroSS = /^[0-9]{0,9}$/;
        let patronDireccion = /^(C\/|Av\.)[A-ZÁÉÍÓÚÇ][a-záéíóúü]+ ?[a-záéíóúü ]*, [0-9]+$/;

        let patrones = new Map([
            ['numeroRegistro', patronNumeroRegistro],
            ['nombre', patronNombreCompleto],
            ['numeroSS', patronNumeroSS],
            ['direccion', patronDireccion]
        ]);
        
        return patrones.get(tipoComprobacion).test(elementoAComprobar);
    }

    //Setters del objeto
    this.modificarNumeroRegistro = function(nuevoNumeroRegistro){
        //Si se comprueban los patrones y estan bien
        if(this.comprobarPatrones(nuevoNumeroRegistro, "numeroRegistro")){

            this.numeroRegistro = nuevoNumeroRegistro;
        }
    }

    this.modificarNombreCompleto = function(nuevoNombreCompleto){
        if(this.comprobarPatrones(nuevoNombreCompleto, "nombre")){
            this.nombreCompleto = nuevoNombreCompleto;
        }
    }

    this.modificarNumeroSS = function(nuevoNumeroSS){
        if(this.comprobarPatrones(nuevoNumeroSS, "numeroSS")){
            this.numeroSS = nuevoNumeroSS;
        }
    }

    this.modificarDireccion = function(nuevaDireccion){
        if(this.comprobarPatrones(nuevaDireccion,"direccion")){
            this.direccion = nuevaDireccion;
        }
    }

    //Ahora las impresiones
    this.imprimirNumeroRegistro = function(){
        return numeroRegistro;
    }

    this.imprimirNombrecompleto = function(){
        return nombreCompleto;
    }

    this.imprimirNumeroSS = function(){
        return numeroSS;
    }

    this.imprimirDireccion = function(){
        return direccion;
    }

    //Sim comprobar patrones da bien que los pase, si no que salga vacio
    if(this.comprobarPatrones(numeroRegistro, "numeroRegistro")){
        this.numeroRegistro = numeroRegistro;
    }else{
        this.numeroRegistro = "";
    }

    if(this.comprobarPatrones(nombreCompleto,"nombre")){
        this.nombreCompleto = nombreCompleto;
    }else{
        nombreCompleto = "";
    }

    if(this.comprobarPatrones(numeroSS, "numeroSS")){
        this.numeroSS = numeroSS;
    }else{
        this.numeroSS = "";
    }

    if(this.comprobarPatrones(direccion, "direccion")) {
        this.direccion = direccion;
    }else{
        this.direccion = "";
    }
}


const registroPacientes = new Map([
    [`AAA024`, `Fernández M. (321790059) -> C/Recoletos, 50`],  
    [`BCD827`, `Ruíz P. (100973253) -> C/Esquerdo izquierdo, 103`],
    [`YUN835`,`Benítez E. (154811767) -> Av.Argentina, 5`]
]);

//Hora de separar

var numeroRegistroPaciente;
var nombrePaciente;
var numeroSSPaciente;
var direccionPaciente;
const agendaPaciente = new Map()
var contadorPaciente = 0;

let registro = registroPacientes.entries()

//Recorremos el registro de pacientes (que es un mapa clave valor)
for([numeroRegistro, datos] of registroPacientes){
//AAA024 -> fernandez m.......
contadorPaciente++;

//Pillamos solo la clave y se la damos AAA...
numeroRegistroPaciente = numeroRegistro

//Pillamos el valor fernandez m. .... y le cortamos por (
//Quedaria con -> pos[0] fernandez m.   pos[1] 32.......
nombrePaciente = datos.split(" (")[0]//Pillamos solo el nombre
numeroSSPaciente = datos.split("(")[1].split(")")[0]//Pillamos solo los numeros
direccionPaciente = datos.split("(")[1].split("->")[1]//Pillamos solo la calle y cortamos en la flecha

agendaPaciente.set(contadorPaciente, new Paciente(numeroRegistroPaciente,
    nombrePaciente, numeroSSPaciente, direccionPaciente));//Introducimos en la agenda
}

console.log(agendaPaciente)