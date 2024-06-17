const $personajesContainer = document.getElementById("personajes")

fetch("https://hp-api.onrender.com/api/characters").
  then((respuesta) => {
    // console.log(respuesta)
    return respuesta.json();
  })
  .then((data) => {
    const personajes = data;
    fetchPersonajes = data
    //console.log(personajes)
    personajes.forEach((personaje) => {
      let srcImage;
      if(personaje.image) {
        srcImage = personaje.image
      } else {
        srcImage = "./assetspersonajes/1081-producto-71wd9qtqvll-ac-ul1500-3330.jpg"
      }
      
      $personajesContainer.innerHTML += `
      <div>   
          <img src="${srcImage}" alt="imagen de ${personaje.name}">
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

  function search() {
    console.log("Buscando!")
  }

