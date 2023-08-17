let pantalla = document.getElementById('pantalla');
let calculo = '';

function appendCaracter(numero) {
  calculo += numero;
  pantalla.value = calculo;
}

function calcular() {
  try {
    let resultado = eval(calculo);
    pantalla.value = resultado;
    calculo = '';
  } catch (error) {
    pantalla.value = 'Error';
  }
}

function LimpiarPantalla() {
  calculo = '';
  pantalla.value = '';
}