let partidas = []

// Jugada del Usuario:
function appendJugada(Jugada) {

  //Cambio de imagen segun jugada:
  let imagen = document.getElementById('imagen_usuario');

  if (Jugada === 'Piedra'){
    imagen.src = "https://ponceelrelajado.com/juego/img/piedra.png";
  } else if (Jugada === 'Papel'){
    imagen.src = "https://ponceelrelajado.com/juego/img/papel.png";
  } else if (Jugada === 'Tijeras'){
    imagen.src = "https://ponceelrelajado.com/juego/img/tijera.png";
  }

  pantalla.value = Jugada;
  eleccionUsuario = Jugada;
  jugar(eleccionUsuario);
}

// Botón Reset:
function LimpiarPantalla() {
    let imagen = document.getElementById('imagen_usuario');
    let imagen2 = document.getElementById('imagen_pc');
    imagen.src = "https://static.vecteezy.com/system/resources/previews/016/861/927/non_2x/rock-scissors-paper-hand-gesture-with-rules-icon-vector.jpg";
    imagen2.src = "https://static.vecteezy.com/system/resources/previews/016/861/927/non_2x/rock-scissors-paper-hand-gesture-with-rules-icon-vector.jpg";
    pantalla.value = '';
    pantalla_pc.value = '';
    document.getElementById("mensaje").innerHTML =''
}

//Proceso del Juego:
function jugar(eleccionUsuario) {

    // Generar Jugada PC:
    let opciones = ["Piedra", "Papel", "Tijeras"];
    let eleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)];
    pantalla_pc.value = eleccionMaquina;

    // Cambiar imagen según jugada PC:

    let imagen = document.getElementById('imagen_pc');

    if (eleccionMaquina === 'Piedra'){
      imagen.src = "https://ponceelrelajado.com/juego/img/piedra.png";
    } else if (eleccionMaquina === 'Papel'){
      imagen.src = "https://ponceelrelajado.com/juego/img/papel.png";
    } else if (eleccionMaquina === 'Tijeras'){
      imagen.src = "https://ponceelrelajado.com/juego/img/tijera.png";
    }

    
    // Verificar resultado:
    let ganador = '';

    // Empate
    if (eleccionUsuario === eleccionMaquina) {
      document.getElementById("mensaje").innerHTML = "Empate. Ambos eligieron " + eleccionUsuario + ".";
      ganador = 'Empate, no hay ganadores.'
    } else if (
      (eleccionUsuario === "Piedra" && eleccionMaquina === "Tijeras") ||
      (eleccionUsuario === "Papel" && eleccionMaquina === "Piedra") ||
      (eleccionUsuario === "Tijeras" && eleccionMaquina === "Papel")
      ) {
        
        // El usuario gana
        document.getElementById("mensaje").innerHTML = "¡Ganaste! Tú eliges " + eleccionUsuario + " y la PC elige " + eleccionMaquina + ".";
        ganador = 'Usuario.'
      } else {
        
        // El usuario pierde
        document.getElementById("mensaje").innerHTML = "Perdiste. Tú eliges " + eleccionUsuario + " y la PC elige " + eleccionMaquina + ".";
        ganador = 'PC.'
      }
      
      // Verificar condiciones pre-guardado:
      if (partidas.length < 5) {
        partidas.push('Jugada del usuario: ' + eleccionUsuario + ', Jugada de la PC: ' + eleccionMaquina + ', Ganador: ' + ganador);
      } else {  
        partidas.splice(0, 1);
        partidas.push('Jugada del usuario: ' + eleccionUsuario + ', Jugada de la PC: ' + eleccionMaquina + ', Ganador: ' + ganador);
      }

      // Guardar y mostrar partidas:
      localStorage.setItem('partidas', JSON.stringify(partidas));
      let partidasg = localStorage.getItem('partidas');
      let array = JSON.parse(partidasg);
      let mensaje = array.join("<br>");
      document.getElementById("mensaje2").innerHTML = mensaje;
  }
 

