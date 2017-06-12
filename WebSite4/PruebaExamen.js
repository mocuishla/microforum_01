function EnviarFormulario() {
    var recogida = "";
    var Nombre = document.getElementById("nombre");
    recogida = recogida + Nombre.value + "<br/>";

    var Apellido1 = document.getElementById("primerapellido");
    recogida = recogida + Apellido1.value + "<br/>";

    var Apellido2 = document.getElementById("segundoapellido");
    recogida = recogida + Apellido2.value + "<br/>";

    var Domicilio = document.getElementById("domicilio");
    recogida = recogida + Domicilio.value + "<br/>";

    var Ciudad = document.getElementById("ciudad");
    recogida = recogida + Ciudad.value + "<br/>";

    var Sexo = document.getElementsByName("sexo");
    for (var i = 0; i < Sexo.length; i++) {
        if (Sexo[i].checked)
        { recogida = recogida + Sexo[i].value + "<br/>"; }
    }

    var SistemaOperativo = document.getElementsByName("sistemaoperativo");
    for (var i = 0; i < SistemaOperativo; i++) {
        if (SistemaOperativo[i].checked)
        { recogida = recogida + SistemaOperativo[i].value + "<br/>"; }
    }

    var Comentarios = document.getElementById("comentarios");
    recogida = recogida + Comentarios.value + "<br/>";

    var precioTotal = 235; 
    recogida = recogida + "Precio Total: " + precioTotal;
    

    InformacionRecogida.innerHTML = recogida;
}