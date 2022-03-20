var nombre = prompt("Ingresa el número que corresponde a tu puesto: 1-Repositor; 2-cajero; 3-supervisor");

if (nombre == 1){
    var calculo1 = 15890 + (15890*0.10)
    alert(calculo1);
} 
else if (nombre == 2){
    var calculo2 = 25630.89;
    alert(calculo2);
} 
else if(nombre == 3){
    var sueldo = 35560.20
    var calculo3 = sueldo.toFixed(2)
    var calculo4 = parseInt(calculo3 - (calculo3*0.11))
    alert('Su sueldo es: $' + calculo3 + ' con un descuento del 11% queda: $'+ calculo4);
} else {
    alert("La opcion ingresada no existe")
}
