// const nombre = "Neb";
// const imagen =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmxcTfqNIR-Kiia8hZr9zxF-ejPi9neT7HVlkqbNuugUrXgwItlOmew2Ui26Z6uBlORc&usqp=CAU";
// const descripcion =
//   "Asesino del gremio gris, nacido en las montañas de la luna";
// const nivel = 100;
// const salud = 27;
// const clase = "Asesino";

// const personaje = {
//   nombre: "Neb",
//   imagen:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmxcTfqNIR-Kiia8hZr9zxF-ejPi9neT7HVlkqbNuugUrXgwItlOmew2Ui26Z6uBlORc&usqp=CAU",
//   descripcion: "Asesino del gremio gris, nacido en las montañas de la luna",
//   nivel: 100,
//   salud: 335,
//   clase: "Asesino",
// };

//base de datos de personajes

const personajesBases = [
  {
    nombre: "Neb",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmxcTfqNIR-Kiia8hZr9zxF-ejPi9neT7HVlkqbNuugUrXgwItlOmew2Ui26Z6uBlORc&usqp=CAU",
    descripcion: "Asesino del gremio gris, nacido en las montañas de la luna",
    nivel: 100,
    salud: 335,
    clase: "Asesino",
    id: "96656417-7cd9-46f9-9dd6-4db7584f8cbb",
  },
  {
    nombre: "Elena",
    imagen: "./assets/img/retrato1.jpeg",
    descripcion: "Hechicera de la torre encantada",
    nivel: 80,
    salud: 280,
    clase: "Hechicera",
    id: "96656417-7cd9-46f9-9dd6-4db7584f8ccc",
  },
  {
    nombre: "Thorgal",
    imagen: "./assets/img/retrato2.jpeg",
    descripcion: "Guerrero del clan del Trueno",
    nivel: 95,
    salud: 310,
    clase: "Guerrero",
    id: "96656417-7cd9-47f9-9dd6-4db7584f8cbb",
  },
  {
    nombre: "Lyra",
    imagen: "./assets/img/retrato3.jpeg",
    descripcion: "Cazadora de criaturas mágicas",
    nivel: 88,
    salud: 290,
    clase: "Cazadora",
    id: "96633417-7cd9-46f9-9dd6-4db7584f8cbb",
  },
  {
    nombre: "Gandar",
    imagen: "./assets/img/retrato4.jpeg",
    descripcion: "Mago de la academia Arcana",
    nivel: 92,
    salud: 300,
    clase: "Mago",
    id: "93356417-7cd9-46f9-9dd6-4db7584f8cbb",
  },
  {
    nombre: "Azura",
    imagen: "./assets/img/retrato5.jpeg",
    descripcion: "Sacerdotisa de la luz",
    nivel: 85,
    salud: 295,
    clase: "Sacerdotisa",
    id: "96656417-7db9-46f9-9dd6-4db7584f8cbb",
  },
  {
    nombre: "Ragnar",
    imagen: "./assets/img/retrato6.jpeg",
    descripcion: "Bárbaro de las tierras salvajes",
    nivel: 90,
    salud: 305,
    clase: "Bárbaro",
    id: "96656417-ddd9-46f9-9dd6-4db7584f8cbb",
  },
  {
    nombre: "Zara",
    imagen: "./assets/img/retrato7.jpeg",
    descripcion: "Bailarina de dagas",
    nivel: 75,
    salud: 270,
    clase: "Pícaro",
    id: "95556417-7cd9-46f9-9dd6-4db7584f8cbb",
  },
  {
    nombre: "Xarok",
    imagen: "./assets/img/retrato8.jpeg",
    descripcion: "Brujo oscuro",
    nivel: 82,
    salud: 285,
    clase: "Brujo",
    id: "96656417-7cd9-46f9-9dd6-4db7584f33cbb",
  },
  {
    nombre: "Aurelia",
    imagen: "./assets/img/retrato9.jpeg",
    descripcion: "Paladín de la justicia",
    nivel: 98,
    salud: 320,
    clase: "Paladín",
    id: "96656327-7cd9-46f9-9dd6-4db7584f8cbb",
  },
];

const personajes =
  JSON.parse(localStorage.getItem("personajesDB")) || personajesBases;
localStorage.setItem("personajesDB", JSON.stringify(personajes));

//solo los primeros 3 personajes
const favorites = personajes.slice(0, 3);

//usuario admin
const admin = { username: "admin", password: "admin" };

//funcion para pintar personajes
function renderPJS(coleccion, contenedor) {
  const contenedorToRender = document.getElementById(contenedor);
  // const contenedorToRender2 = document.querySelector("#contenedor_favoritos");
  // const contenedorToRender3 = document.getElementById("contenedor_favoritos");
  contenedorToRender.innerHTML = "";
  for (const pj of coleccion) {
    contenedorToRender.innerHTML += `<div class="card">
                    <img class="card-image"
                        src="${pj.imagen}"
                        alt="${pj.nombre}">
                    <div class="card-content">
                        <h2 class="card-title">${pj.nombre}</h2>
                        <p class="card-description">${pj.descripcion}</p>
                        <p>Nivel: ${pj.nivel}</p>
                        <p>Salud: ${pj.salud}</p>
                        <p>Clase: ${pj.clase}</p>
                        </div>
                </div>`;
  }
}

//contenedor principal
const main_container = document.getElementById("main_container");

//lo primero que va a hacer el programa
main_container.innerHTML = ` <section class="main_container_welcome">
                <h1>Heroes of 4to</h1>
                <p>Heroes of 4to es un juego de rol online multijugador masivo en el que podrás crear tu propio
                    personaje y vivir aventuras en un mundo de fantasía medieval.</p>

            </section>
            <section class="main_container_title">
                <h2>DESTACADOS</h2>
            </section>
            <section class="main_container_favorites" id="contenedor_favoritos">

            </section>`;
//lo segundo que va a hacer el programa
renderPJS(favorites, "contenedor_favoritos");

//funcionalidad boton personajes
const btn_personajes = document.getElementById("boton_personajes");

btn_personajes.addEventListener("click", (event) => {
  const container = document.getElementById("main_container");
  container.innerHTML = `<section class="main_container_favorites" id="contenedor_personajes"></section>`;

  for (const pj of personajes) {
    const secondary_container = document.getElementById(
      "contenedor_personajes"
    );
    secondary_container.innerHTML += `<div class="card">
                    <img class="card-image"
                        src="${pj.imagen}"
                        alt="${pj.nombre}">
                    <div class="card-content">
                        <h2 class="card-title">${pj.nombre}</h2>
                        <p class="card-description">${pj.descripcion}</p>
                        <p>Nivel: ${pj.nivel}</p>
                        <p>Salud: ${pj.salud}</p>
                        <p>Clase: ${pj.clase}</p>
                        </div>
                </div>`;
  }
});

//funcionalidad de boton home
const btn_home = document.getElementById("boton_home");

btn_home.addEventListener("click", (event) => {
  const container = document.getElementById("main_container");
  container.innerHTML = ` <section class="main_container_welcome">
                <h1>Heroes of 4to</h1>
                <p>Heroes of 4to es un juego de rol online multijugador masivo en el que podrás crear tu propio
                    personaje y vivir aventuras en un mundo de fantasía medieval.</p>

            </section>
            <section class="main_container_title">
                <h2>DESTACADOS</h2>
            </section>
            <section class="main_container_favorites" id="contenedor_favoritos">

            </section>`;
  //lo segundo que va a hacer el programa
  renderPJS(favorites, "contenedor_favoritos");
});

//funcionalidad de boton login
const btn_login = document.getElementById("boton_login");

btn_login.addEventListener("click", (event) => {
  const container = document.getElementById("main_container");
  container.innerHTML = `<article class="login_form">
        <form action="" id="form_login">
            <label for="username">Ingrese usuario</label>
            <input type="text" placeholder="Username" name="username">
            <input type="password" placeholder="Password" name="password">
            <input type="submit" value="Login" id="">
        </form>
    </article>`;
  const form_login = document.getElementById("form_login");
  form_login.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = {
      username: form_login.elements.username.value,
      password: form_login.elements.password.value,
    };

    if (admin.username == user.username && admin.password == user.password) {
      cargaPersonajes();
    } else {
      alert("Usuario o contraseña incorrectos");
      form_login.reset();
      form_login.elements.username.focus();
    }
  });
});

//pantalla de carga de personajes
function cargaPersonajes() {
  const container = document.getElementById("main_container");
  container.innerHTML = `<article class="login_form">
          <h1>Cargar personajes</h1>
            
        <form action="" id="personaje_form">
            <label for="nombre">Ingrese nombre de personaje</label>
            <input type="text" placeholder="Nombre" name="nombre">
            <label for="imagen">Ingrese URL o ruta a la imagen de personaje</label>
            <input type="text" placeholder="URL o Ruta" name="imagen">
            <label for="descripcion">Ingrese descripcion de personaje</label>
            <input type="text" placeholder="Breve descipción" name="descripcion">
            <label for="nivel">Ingrese el nivel actual de personaje</label>
            <input type="number" placeholder="23" name="nivel" min="1" max="1000">
            <label for="salud">Ingrese la salud actual del personaje</label>
            <input type="number" placeholder="230" name="salud" min="1">
             <label for="clase">Ingrese clase de personaje</label>
            <input type="text" placeholder="Guerrero" name="clase">
            <input type="submit" value="GUARDAR" id="">
        </form>
        <h1>Borrar personajes</h1>
       <form action="" id="borrarPersonaje_form">
            <label for="buscarID">Ingrese el id del personaje a borrar</label>
            <input type="text" placeholder="96656327-7cd9-46f9-9dd6-4db7584f8cbb" name="buscarID">
            <input type="submit" value="BORRAR" id="">
        </form>
    </article>
     <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Descripcion</th>
                        <th>Nivel</th>
                        <th>Salud</th>
                        <th>Clase</th>
                    </tr>
                </thead>
                <tbody id="personajes_tabla">
                   
                </tbody>
            </table>`;
  //pintar personajes
  renderTablaPersonajes();
  //evento de cargar personaje
  const personaje_form = document.getElementById("personaje_form");
  personaje_form.addEventListener("submit", (event) => {
    event.preventDefault();

    const personajeNuevo = {
      id: crypto.randomUUID(),
      nombre: personaje_form.elements.nombre.value,
      imagen: personaje_form.elements.imagen.value,
      descripcion: personaje_form.elements.descripcion.value,
      nivel: personaje_form.elements.nivel.valueAsNumber,
      salud: personaje_form.elements.salud.valueAsNumber,
      clase: personaje_form.elements.clase.value,
    };
    personajes.push(personajeNuevo);
    const personajesJSON = JSON.stringify(personajes);
    localStorage.setItem("personajesDB", personajesJSON);
    renderTablaPersonajes();
    personaje_form.reset();
    personaje_form.elements.nombre.focus();
  });
  //evento de borrar personajes
  const borrarPersonajes_form = document.getElementById("borrarPersonaje_form");
  borrarPersonajes_form.addEventListener("submit", (event) => {
    event.preventDefault();
    const id = borrarPersonajes_form.elements.buscarID.value;
    borrarPersonaje(id);
    borrarPersonajes_form.reset();
    borrarPersonajes_form.elements.buscarID.focus();
  });
}

function renderTablaPersonajes() {
  const container = document.getElementById("personajes_tabla");
  container.innerHTML = "";
  const personajesInveretido = [...personajes];
  personajesInveretido.reverse();
  for (const pj of personajesInveretido) {
    container.innerHTML += `<tr>
                        <th>${pj.id}</th>
                      <td>${pj.nombre}</td>
                      <td><img src="${pj.imagen}"
                        alt="${pj.nombre}"></td>
                      <td>${pj.descripcion}</td>
                      <td>${pj.nivel}</td>
                      <td>${pj.salud}</td>
                      <td>${pj.clase}</td>
                   </tr>`;
  }
}

function borrarPersonaje(id) {
  const index = personajes.findIndex((cadaPersonaje) => {
    cadaPersonaje.id === id;
  });
  if (index === -1) {
    alert("No se encontro personaje");
  } else {
    personajes.splice(index, 1);
  }
  const personajesJSON = JSON.stringify(personajes);
  localStorage.setItem("personajesDB", personajesJSON);
}
