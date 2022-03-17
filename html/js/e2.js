var producto = parseInt(prompt("Hola bienvenido ingrese la cantidad de paquetes: "));
    if (isNaN(producto)) {
        alert ("El numero ingresado no es valido")
    } 
        else if (producto<5) {
        alert('No se permiten compras inferiores a 5 productos');
    }
        else if (producto>=5 && producto<=15){
        alert('El costo de envío es de $200');
    }
    else{
        alert('El envío es gratuito');
    }