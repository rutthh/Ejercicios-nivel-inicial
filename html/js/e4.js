var nombre = prompt("Ingrese su nombre: ")
var edad = parseInt(prompt("Ingrese su edad: "))
if (isNaN(edad)) {
    alert('Lo ingresado no es valido')
}
    else if (edad <18) {
    alert('Hola' + ' ' + nombre + ' ' + 'no podes entrar');
}else {
    alert('Hola' + ' ' + nombre + ' ' + 'podes entrar');
}
