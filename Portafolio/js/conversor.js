// Datos de unidades por categoría (nombres simples)
var opciones = {
  temperatura: ["Celsius", "Fahrenheit", "Kelvin"],
  distancia:   ["Metros", "Kilómetros", "Millas", "Pies", "Pulgadas"],
  tiempo:      ["Años", "Días", "Horas", "Segundos"],
  moneda:      ["MXN", "USD", "EUR"]
};

// Poblar selects con base en la categoría
function cargarUnidades() {
  var cat = document.getElementById('categoria').value;
  var lista = opciones[cat];
  var selDe = document.getElementById('de');
  var selA  = document.getElementById('a');
  selDe.innerHTML = '';
  selA.innerHTML = '';
  for (var i = 0; i < lista.length; i++) {
    var op1 = document.createElement('option');
    op1.value = lista[i];
    op1.textContent = lista[i];
    selDe.appendChild(op1);
    var op2 = document.createElement('option');
    op2.value = lista[i];
    op2.textContent = lista[i];
    selA.appendChild(op2);
  }
  if (selA.options.length > 1) {
    selA.selectedIndex = 1; // por defecto, diferente a origen
  }
}

// Conversión: Temperatura
function convertirTemperatura(de, a, valor) {
  var x = valor;
  if (de === a) { return x; }
  // Normalizar a Celsius
  var c;
  if (de === 'Celsius') { c = x; }
  else if (de === 'Fahrenheit') { c = (x - 32) * 5/9; }
  else if (de === 'Kelvin') { c = x - 273.15; }
  // De Celsius a destino
  if (a === 'Celsius') { return c; }
  if (a === 'Fahrenheit') { return c * 9/5 + 32; }
  if (a === 'Kelvin') { return c + 273.15; }
  return x;
}

// Conversión: Distancia (factor a metros)
function convertirDistancia(de, a, valor) {
  var factores = {
    'Metros': 1,
    'Kilómetros': 1000,
    'Millas': 1609.344,
    'Pies': 0.3048,
    'Pulgadas': 0.0254
  };
  var enMetros = valor * factores[de];
  return enMetros / factores[a];
}

// Conversión: Tiempo (aprox.) base en segundos
function convertirTiempo(de, a, valor) {
  var segPor = {
    'Segundos': 1,
    'Horas': 3600,
    'Días': 86400,           // 24 * 3600
    'Años': 31536000         // 365 * 86400 (aprox.)
  };
  // Pasar a segundos y luego a destino
  var enSeg = valor * segPor[de];
  return enSeg / segPor[a];
}

// Conversión: Moneda (sin conexión)
function convertirMoneda(de, a, valor) {
  // Definir valores en MXN
  var tasaMXN = {
    'MXN': 1,
    'USD': 18.40, // 1 USD ≈ 18.40 MXN
    'EUR': 19.50  // 1 EUR ≈ 19.5 MXN 
  };
  // Convertir 'de' a MXN, luego MXN a 'a'
  var enMXN = valor * tasaMXN[de];
  return enMXN / tasaMXN[a];
}

function convertir() {
  var cat = document.getElementById('categoria').value;
  var de = document.getElementById('de').value;
  var a = document.getElementById('a').value;
  var valor = parseFloat(document.getElementById('valorOrigen').value);
  if (isNaN(valor)) { valor = 0; }
  var res = valor;

  if (cat === 'temperatura') {
    res = convertirTemperatura(de, a, valor);
  } else if (cat === 'distancia') {
    res = convertirDistancia(de, a, valor);
  } else if (cat === 'tiempo') {
    res = convertirTiempo(de, a, valor);
  } else if (cat === 'moneda') {
    res = convertirMoneda(de, a, valor);
  }

  // Limitar a un número razonable de decimales
  var salida = document.getElementById('valorDestino');
  // Mostrar hasta 6 decimales, recortando ceros innecesarios
  salida.value = Number(res.toFixed(6));
}

function limpiar() {
  document.getElementById('valorOrigen').value = '';
  document.getElementById('valorDestino').value = '';
}

// Inicialización simple
(function init() {
  // Año del pie de página
  var y = new Date().getFullYear();
  var el = document.getElementById('anio');
  if (el) { el.textContent = y; }

  // Eventos
  document.getElementById('categoria').addEventListener('change', cargarUnidades);
  document.getElementById('btnConvertir').addEventListener('click', convertir);
  document.getElementById('btnLimpiar').addEventListener('click', limpiar);

  // Primera carga
  cargarUnidades();
})();

