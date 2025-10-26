function cali() {
    var valor = document.getElementById("cali").value;
    var x = parseInt(valor);
    
    if (x > 10 || x<0){
        alert("El número debe estar en el rango de 0 a 10");
    }else if(x < 6){
        document.getElementById("res").innerHTML = "NA";
    }else if(x >= 6 && x < 7.5){
        document.getElementById("res").innerHTML = "S";
    }else if(x >= 7.5 && x < 9){
        document.getElementById("res").innerHTML = "B";
    }else if(x >= 9 && x < 10){
        document.getElementById("res").innerHTML = "MB";
    }else if(x == 10){
        document.getElementById("res").innerHTML = "LAP";
    } 
}

function calFactorial(x){
    if(x == 0 || x == 1){
        return 1;
    }else{
        return x * calFactorial(x-1);
    }
    
}

function factorial(){
    var num = document.getElementById("fac").value;
    var x = parseInt(num);
    if(x<0){
        alert("EL FACTORIAL NO ESTA DEFINIDO");
    }else{
        document.getElementById("resFac").innerHTML = calFactorial(x);
    }
}

function mostrarInfoFormulario() {
    var form = document.getElementById("form");
    if (!form) {
        return;
    }

    var output = document.getElementById("salida");
    if (!output) {
        return;
    }

    var lines = [];

    var nombre = form.elements["nombre"].value.trim();
    lines.push("Nombre: " + (nombre || "Sin especificar"));

    var correo = form.elements["correo"].value.trim();
    lines.push("Correo: " + (correo || "Sin especificar"));

    var edad = form.elements["edad"].value;
    lines.push("Edad: " + (edad ? edad : "Sin especificar"));

    var generoSeleccionado = form.querySelector('input[name="genero"]:checked');
    var genero = generoSeleccionado ? generoSeleccionado.value : "Sin seleccionar";
    lines.push("Genero: " + genero);

    var nacimiento = form.elements["nacim"].value;
    lines.push("Fecha de nacimiento: " + (nacimiento || "Sin especificar"));

    var color = form.elements["col"].value;
    lines.push("Color favorito: " + (color || "Sin especificar"));

    output.innerHTML = lines.join("<br>");
}
