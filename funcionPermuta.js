function funcionPrincipal() {
    let a = 5;
    let b = 4;
    let resultado = ""; // Aquí vamos a guardar el resultado como un string.

    // Creamos la función permuta que intercambia los valores de a y b.
    function permuta() {
        resultado += "El valor inicial de <b>a</b> es: " + a + "<br>";
        resultado += "El valor inicial de <b>b</b> es: " + b + "<br>";
        let variableTemporal = a;
        a = b;
        b = variableTemporal;
        resultado += "El nuevo valor de <b>a</b> es: " + a + "<br>";
        resultado += "El nuevo valor de <b>b</b> es: " + b + "<br>";
    }

    // Ejecutamos la función permuta.
    permuta();

    // Mostramos el resultado en el elemento <p id="permuta">.
    document.getElementById("permuta").innerHTML = resultado;
}