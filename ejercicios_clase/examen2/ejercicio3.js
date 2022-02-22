//Funcion objeto 
function CarritoCompra(){

    //El objeto que no se declarara sera una array donde insertar los valores
    this.carrito = new Array();

    //Funcion para buscar el item / su posicion
    this.localizarItemCarrito = function(producto){
        
        let posicionItem = -1;

        //Recorremos el carrito
        for(let i = 0; i < this.carrito.length; i++){
            //Si la posicion del carrito incluye algun producto en la array
            if(this.carrito[i].includes(producto)){
                //Le pasamos a la posicion item la i / la pos del objeto
                posicionItem = i;
            }
        }
        return posicionItem;
    }

    //Funcion para meterle al carrito/la array un producto y una cantidad
    this.introducirItemCarrito = function(producto, cantidad){
        this.carrito.push(new Array(producto, cantidad))
    }

    //Funcion para borrar un producto de un carrito 
    this.borrarItemCarrito = function(producto, cantidad){

        //Localizamos la posicion y se la pasamos a una variable
        let posicionItemCarrito = this.localizarItemCarrito(producto)

        //Le eliminamos la cantidad y la restamos 
        this.carrito[posicionItemCarrito][1] -= cantidad;
    
        //Si lo eliminado es menor o igual a 0 se elimina el producto
        if(this.carrito[posicionItemCarrito][1] <= 0){
            this.carrito.splice(posicionItemCarrito, 1)
        }
    }
}

//Crear objeto
var carrito = new CarritoCompra();

//Introducir valores
carrito.introducirItemCarrito("salsa",4);
carrito.introducirItemCarrito("cola",7);
console.log(carrito);

//Localizar items
console.log(carrito.localizarItemCarrito("sal"))//mal;
console.log(carrito.localizarItemCarrito("cola"))//bien;

//Borrar item parcial
carrito.borrarItemCarrito("cola",3);
console.log(carrito);

//Borrar item completo
carrito.borrarItemCarrito("cola",4);
console.log(carrito);