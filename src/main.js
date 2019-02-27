window.onload = function() {
    goPokemons();
};

function getPokemons() {
    return POKEMON["pokemon"];
};

console.log(getPokemons());

function goPokemons() {
    let eachPokemon = document.getElementById("eachPokemon");

    eachPokemon.innerHTML = `
    ${getPokemons().map((numero) => `
        <div class="pokemon-card">
            <div class="card-title">
                <h3 class="name-pokemon">${numero["name"]}</h3>
                <h4 class="num-pokemon">${numero["num"]}<h3>
            </div>
            <div class="img-card">
                <img src="${numero["img"]}" class="img-pokemon" />
            </div>
            <div class="card-type">
                <p class="pokemon-type">${numero["type"]}</p>
            </div>
            <div class="card-weaknesses">
                <p class="pokemon-weak">${numero["weaknesses"]}</p>
            </div>
        </div>
       `).join("")}
       `
}

console.log(goPokemons());
