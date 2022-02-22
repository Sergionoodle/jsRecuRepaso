//Creamos el objeto
function Ordenador(marca, modelo, ram=4, disco=512,pulgadas=17){
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.disco = disco;
    this.pulgadas = pulgadas;

    this.toString = function(){
        return "Modelo = "+this.modelo+"\n"+
        "Marca = "+this.marca+"\n"+
        "Ram = "+this.ram+"\n"+
        "Disco = "+this.disco+"\n"+
        "Pulgadas = "+this.pulgadas;
    }
}


function Portatil(marca,modelo,ram=4,disco=512,pulgadas=17,autonomia=3){
    this.__proto__ = new Ordenador(marca,modelo,ram,disco,pulgadas);
    this.autonomia = autonomia;

    this.toString = function(){
        return this.__proto__.toString() +
        "Autonomia = "+this.autonomia;
    }
}

pc = new Ordenador("Semens","Tuberculos")

console.log(pc.toString());

porta = new Portatil("OWO","Sinso",45,3566,12);

console.log(porta.toString())