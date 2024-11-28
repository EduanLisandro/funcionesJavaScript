function cuenta() {

    let limite = 100;
    let resultado = "";

    function cuentaPorValor() {
        for (let i = 0; i <= limite; i++) {
            resultado += `${i} `;
        }
    }

    cuentaPorValor();
    document.getElementById("cuenta").innerHTML = resultado;
    //console.log(resultado);
}
//cuenta();
