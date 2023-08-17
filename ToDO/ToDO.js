// Obtener la lista y el campo de texto del formulario
var ListarTareas = document.getElementById("ListarTareas");
var TareaNueva = document.getElementById("TareaNueva");

// Agregar evento al formulario para agregar tareas
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir que se recargue la página
    if (TareaNueva.value.trim() !== "") { // Verificar que el campo no esté vacío
        var tarea = document.createElement("li"); // Crear un elemento de lista
        tarea.innerText = TareaNueva.value; // Agregar el texto de la tarea
        tarea.addEventListener("click", function() { // Agregar evento para marcar/desmarcar tarea
            this.classList.toggle("checked");
        });
        ListarTareas.appendChild(tarea); // Agregar la tarea a la lista
        TareaNueva.value = ""; // Limpiar el campo de texto
        localStorage.setItem("tarea", ListarTareas.innerHTML); // Guardar las tareas en el local storage
    }
});

// Agregar evento a cada tarea para eliminarla con click de la rueda del mouse
ListarTareas.addEventListener("mousedown", function(event) {
    if (event.button === 1) {
        event.target.remove();
        localStorage.setItem("tarea", ListarTareas.innerHTML); // Actualizar las tareas en el local storage
    }
});