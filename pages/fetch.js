const $main = document.querySelector("main")

fetch("https://hp-api.onrender.com/api/characters").
  then((respuesta) => {
    // console.log(respuesta)
    return respuesta.json();
  })
  .then((data) => {
    const personajes = data;
    //console.log(personajes)
    personajes.forEach((personaje) => {
      $main.innerHTML += `
<div>   
 
    <img src="${personaje.image}" alt="imagen de ${personaje.name}">
    <h4>${personaje.name}</h4>
    <p>Genero: ${personaje.gender}</p>
    <p>Fecha de Nacimiento:${personaje.yearOfBirth}</p>
    <p>Raza:${personaje.ancestry}</p>
    <p>Casa:${personaje.house}</p>
    <p>Patronus:${personaje.patronus}</p>
</div>

    `;
    });

  })