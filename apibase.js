//FETCH
/*


*/

//Ejemplo 1

const tareas = fetch("https://jsonplaceholder.typicode.com/todos")

tareas
    .then((respuesta) => {
         return respuesta.json();
    })
    .then((datos) => {
        console.log(datos);
    })
    .catch((err) => {
        console.log(err);
    });

    const tareas1 = fetch("https://jsonplaceholder.typicode.com/todos");

    tareas1
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        datos.map((tarea1) => {
          let base = document.getElementById("base");
          let p = document.createElement("p");
          p.innerHTML = `${tarea1.id} - ${tarea1.title}`;
          base.appendChild(p);
        });
      })
      .catch((error) => {
        console.log(error);
      });

      const personajes = fetch("https://rickandmortyapi.com/api/character");

      personajes
        .then((respuesta) => {
          return respuesta.json();
        })
        .then((datos) => {
          datos.results.map((personaje) => {
            let base = document.getElementById("base");
            let img = document.createElement("img");
            img.src = personaje.image;
            let p = document.createElement("p");
            p.innerHTML = `${personaje.id} - ${personaje.name}`;
            base.appendChild(img);
            base.appendChild(p);
          });
        });