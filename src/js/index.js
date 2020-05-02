function crearCuadricula(pokemon) {
    const container = document.querySelector(".container");

    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");

    p.textContent = pokemon.id + ". " + pokemon.name;
    img.src = pokemon.sprites.back_default;

    div.classList.add("elemento");
    div.classList.add("round");
    div.classList.add("shadow");
    container.appendChild(div);


    div.addEventListener("mouseover", function() {
        img.src = pokemon.sprites.front_default
    });

    div.addEventListener("mouseout", function() {
        img.src = pokemon.sprites.back_default
    });

    div.appendChild(img);
    div.appendChild(p);

}



function getPokemon() {

    let urls = [];
    for (i = 1; i < 152; i++) {
        urls.push("https://pokeapi.co/api/v2/pokemon/" + i + '/');
    }
    // Mapeamos cada url a su promesa 
    let requests = urls.map(url => fetch(url));

    // Promise.all esperamos a que se resuelvan todas
    Promise.all(requests)
        //Mapeamos las respuesta y las pasamos a un json para poder leerlas
        .then(responses => Promise.all(responses.map(r => r.json())))
        // Por cada pokemon llamamos a crear la cuadrícula
        .then(pokemons => pokemons.forEach(pokemon => {
            crearCuadricula(pokemon);
        }));
}

getPokemon()