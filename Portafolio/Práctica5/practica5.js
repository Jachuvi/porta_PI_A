function agregarFila() {
    var nombreElemento = document.getElementById("nombre");
    var correoElemento = document.getElementById("correo");
    var fechaElemento = document.getElementById("fecha");
    var colorElemento = document.getElementById("color");
    var nivelElemento = document.getElementById("nivel");
    var interesElementos = document.getElementsByName("interes");
    var preferenciaElementos = document.getElementsByName("preferencia");

    var camposVacios = [];

    var nombreValor = nombreElemento.value.trim();
    if (nombreValor === "") {
        camposVacios.push("Nombre");
    }

    var correoValor = correoElemento.value.trim();
    if (correoValor === "") {
        camposVacios.push("Correo electronico");
    }

    var interesesSeleccionados = [];
    var i;
    for (i = 0; i < interesElementos.length; i++) {
        if (interesElementos[i].checked) {
            interesesSeleccionados.push(interesElementos[i].value);
        }
    }
    if (interesesSeleccionados.length === 0) {
        camposVacios.push("Temas de interes");
    }

    var preferenciaValor = "";
    for (i = 0; i < preferenciaElementos.length; i++) {
        if (preferenciaElementos[i].checked) {
            preferenciaValor = preferenciaElementos[i].value;
        }
    }
    if (preferenciaValor === "") {
        camposVacios.push("Preferencia");
    }

    var fechaValor = fechaElemento.value;
    if (fechaValor === "") {
        camposVacios.push("Fecha y hora");
    }

    var colorValor = colorElemento.value;
    if (colorValor === "") {
        camposVacios.push("Color favorito");
    }

    var nivelValor = nivelElemento.value;
    if (nivelValor === "") {
        camposVacios.push("Nivel de satisfaccion");
    }

    if (camposVacios.length > 0) {
        alert("Los siguientes campos estan vacios: " + camposVacios.join(", "));
        return;
    }

    var cuerpoTabla = document.getElementById("cuerpo");
    var nuevaFila = cuerpoTabla.insertRow();

    var celdaNombre = nuevaFila.insertCell();
    celdaNombre.textContent = nombreValor;

    var celdaCorreo = nuevaFila.insertCell();
    celdaCorreo.textContent = correoValor;

    var celdaIntereses = nuevaFila.insertCell();
    celdaIntereses.textContent = interesesSeleccionados.join(", ");

    var celdaPreferencia = nuevaFila.insertCell();
    celdaPreferencia.textContent = preferenciaValor;

    var celdaFecha = nuevaFila.insertCell();
    celdaFecha.textContent = fechaValor.replace("T", " ");

    var celdaColor = nuevaFila.insertCell();
    celdaColor.textContent = colorValor;
    celdaColor.style.backgroundColor = colorValor;
    celdaColor.style.color = "#000000";

    var celdaNivel = nuevaFila.insertCell();
    celdaNivel.textContent = nivelValor;

    document.getElementById("form").reset();
}
