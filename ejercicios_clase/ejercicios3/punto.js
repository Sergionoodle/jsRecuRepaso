function Punto(coordX, coordY){
    this.x = coordX;
    this.y = coordY;


    this.cambiar = (coordX, coordY) => {
        this.x = coordX;
        this.y = coordY;
    }

    this.copia = () => (new Punto(this.x, this.y))
    
    this.suma = (punto2) => (new Punto(this.x + punto2.x, this.y + punto2.x));

    this.toString = () => (`(${this.x},${this.y})`);

    this.obtenerDistancia = function(punto2){
        return Math.sqrt(
            Math.pow(Math.abs(this.x - punto2.x),2) +
            Math.pow(Math.abs(this.y - punto2.y),2)
        )
    }
}


var p =new  Punto(1,2);

console.log("p: "+ p.toString());

var q = new Punto(6,-3);

console.log("q: "+q.toString());


p.cambiar(-5,2);
console.log("p cambiada: "+p.toString());

var r = p.copia();
console.log("r: "+r.toString())

r.x = 9;

console.log("p: "+p.toString());
console.log("r: "+r.toString());


var s = p.suma(r);
console.log("suma p : "+s.toString());

console.log("Distancia entre p y q: "+p.obtenerDistancia(q));
