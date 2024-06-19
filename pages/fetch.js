const $personajesContainer = document.getElementById("personajes")


function createCardPersonaje(personaje) {
  let srcImage;
  if (personaje.image) {
    srcImage = personaje.image
  } else {
    srcImage = "./assetspersonajes/1081-producto-71wd9qtqvll-ac-ul1500-3330.jpg"
  }

  $personajesContainer.innerHTML += `
  <div id="card-personaje">   
      <img src="${srcImage}" alt="imagen de ${personaje.name}">
      <h4>${personaje.name}</h4>
      <p>Genero: ${personaje.gender}</p>
      <p>Fecha de Nacimiento: ${personaje.yearOfBirth}</p>
      <p>Raza: ${personaje.ancestry}</p>
      <p>Casa: ${personaje.house}</p>
      <p>Patronus: ${personaje.patronus}</p>
  </div>
`;
}

function includeName(personaje, name) {
  const str = personaje.name.toLowerCase()
  if (str.includes(name)) {
    return personaje
  }
}

function fetching(name) {
  $personajesContainer.innerHTML = ""
  fetch("https://hp-api.onrender.com/api/characters").
    then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      let personajes;
      if (name) {
        personajes = data.filter((personaje) => includeName(personaje, name))
      } else {
        personajes = data;
      }

      if (personajes.length > 0) {
        personajes.forEach(createCardPersonaje);
      } else {
        $personajesContainer.innerHTML = `<h1> No se encontro nada </h1> <button onclick="refresh()"> Refrescar </button>`
      }
    })
}

function refresh() {
  const searchInput = document.getElementById('buscador');
  searchInput.value = ""
  fetching()
}

function search() {
  console.log("Buscando!")
  const searchInput = document.getElementById('buscador');
  if (searchInput.value) {
    const searched = searchInput.value.toLowerCase();
    fetching(searched)
  }
}

fetching()

