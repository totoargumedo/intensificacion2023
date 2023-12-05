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

const contenedorFavoritos = document.querySelector(".main_container_favorites");
// const contenedorFavoritos2 = document.querySelector("#contenedor_favoritos");
// const contenedorFavoritos3 = document.getElementById("contenedor_favoritos");

contenedorFavoritos.innerHTML = `<div class="card">
                    <img class="card-image"
                        src="${personaje.imagen}"
                        alt="${personaje.nombre}">
                    <div class="card-content">
                        <h2 class="card-title">${personaje.nombre}</h2>
                        <p class="card-description">${personaje.descripcion}</p>
                        <p>Nivel: ${personaje.nivel}</p>
                        <p>Salud: ${personaje.salud}</p>
                        <p>Clase: ${personaje.clase}</p>
                    </div>
                </div>`;
