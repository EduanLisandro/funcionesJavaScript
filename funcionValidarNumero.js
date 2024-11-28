var validar_numero = window.prompt("Ingresa un numero ");

function validarNumero(){
    if (validar_numero > 0) {
        alert("El numero es positivo: " + validar_numero);
    }else if(validar_numero < 0){
        alert("El numero es negativo: " + validar_numero);
    }else{
        alert("El numero ingresado es nulo y su valor es: " + validar_numero);
    }
}
validarNumero();

