//Obtenemos la url por prompt
var ulr = prompt("Indica la url que quieres comprobar")

// Partes del patrón de la expresión regular
patronProtocolo = `^(ftp|http|https):\\/{0,3}`;
patronUsuarioPassword = `(([A-Za-z0-9\\-_\\.]*:.+|[A-Za-z0-9\\-_\\.]*)@+)*`;
patronNombreMaquina = `([A-Za-z0-9\\-_]*\.[A-Za-z0-9\\-_]+(\.[A-Za-z0-9\\-_]+)*)`;
patronPuerto = `(:[0-9]{1,5})?`
patronRuta = `(\\/([A-Za-z\\.]+\\/?)*)?`
patronBusqueda = `(\\?.+)?`

//Patron completo url
var patronURL = new RegExp(patronProtocolo + 
    patronUsuarioPassword +
    patronNombreMaquina + 
    patronPuerto + 
    patronRuta + 
    patronBusqueda);

document.write(patronURL.test(url))