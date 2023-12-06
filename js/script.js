// const nombre = "Neb";
// const imagen =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmxcTfqNIR-Kiia8hZr9zxF-ejPi9neT7HVlkqbNuugUrXgwItlOmew2Ui26Z6uBlORc&usqp=CAU";
// const descripcion =
//   "Asesino del gremio gris, nacido en las montañas de la luna";
// const nivel = 100;
// const salud = 27;
// const clase = "Asesino";

const personaje = {
  nombre: "Neb",
  imagen:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmxcTfqNIR-Kiia8hZr9zxF-ejPi9neT7HVlkqbNuugUrXgwItlOmew2Ui26Z6uBlORc&usqp=CAU",
  descripcion: "Asesino del gremio gris, nacido en las montañas de la luna",
  nivel: 100,
  salud: 335,
  clase: "Asesino",
};

//base de datos de personajes
const personajes = [
  {
    nombre: "Neb",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmxcTfqNIR-Kiia8hZr9zxF-ejPi9neT7HVlkqbNuugUrXgwItlOmew2Ui26Z6uBlORc&usqp=CAU",
    descripcion: "Asesino del gremio gris, nacido en las montañas de la luna",
    nivel: 100,
    salud: 335,
    clase: "Asesino",
  },
  {
    nombre: "Elena",
    imagen: "./assets/img/retrato1.jpeg",
    descripcion: "Hechicera de la torre encantada",
    nivel: 80,
    salud: 280,
    clase: "Hechicera",
  },
  {
    nombre: "Thorgal",
    imagen: "./assets/img/retrato2.jpeg",
    descripcion: "Guerrero del clan del Trueno",
    nivel: 95,
    salud: 310,
    clase: "Guerrero",
  },
  {
    nombre: "Lyra",
    imagen: "./assets/img/retrato3.jpeg",
    descripcion: "Cazadora de criaturas mágicas",
    nivel: 88,
    salud: 290,
    clase: "Cazadora",
  },
  {
    nombre: "Gandar",
    imagen: "./assets/img/retrato4.jpeg",
    descripcion: "Mago de la academia Arcana",
    nivel: 92,
    salud: 300,
    clase: "Mago",
  },
  {
    nombre: "Azura",
    imagen: "./assets/img/retrato5.jpeg",
    descripcion: "Sacerdotisa de la luz",
    nivel: 85,
    salud: 295,
    clase: "Sacerdotisa",
  },
  {
    nombre: "Ragnar",
    imagen: "./assets/img/retrato6.jpeg",
    descripcion: "Bárbaro de las tierras salvajes",
    nivel: 90,
    salud: 305,
    clase: "Bárbaro",
  },
  {
    nombre: "Zara",
    imagen: "./assets/img/retrato7.jpeg",
    descripcion: "Bailarina de dagas",
    nivel: 75,
    salud: 270,
    clase: "Pícaro",
  },
  {
    nombre: "Xarok",
    imagen: "./assets/img/retrato8.jpeg",
    descripcion: "Brujo oscuro",
    nivel: 82,
    salud: 285,
    clase: "Brujo",
  },
  {
    nombre: "Aurelia",
    imagen: "./assets/img/retrato9.jpeg",
    descripcion: "Paladín de la justicia",
    nivel: 98,
    salud: 320,
    clase: "Paladín",
  },
];
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
  container.innerHTML = `<section class="main_container_favorites" id="contenedor_favoritos"></section>`;

  for (const pj of personajes) {
    const secondary_container = document.getElementById("contenedor_favoritos");
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
      alert("Logeado");
    } else {
      alert("Escribbi bien");
    }
  });
});
