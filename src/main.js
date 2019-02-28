const pokemonData = POKEMON["pokemon"];
const checkAtoZ = document.getElementById("alphOrderAtoZ");
const checkZtoA = document.getElementById("alphOrderZtoA");
const one = document.getElementById("one");
const two = document.getElementById("two");

window.onload = function () {
    goPokemons();
};

function getPokemons() {
    return pokemonData;
};

function goPokemons() {
    let eachPokemon = document.getElementById("eachPokemon");
    eachPokemon.innerHTML = `
    ${getPokemons().map((number) => `
        <div class="pokemon-card">
            <div class="card-title">
                <h3 class="name-pokemon">${number["name"]}</h3>
            </div>
            <div class="card-num">
                <h4 class="num-pokemon">${number["num"]}<h3>
            </div>
            <div class="card-img">
                <img src="${number["img"]}" class="img-pokemon" />
            </div>
            <div class="card-type">
                <p class="pokemon-type">${number["type"]}</p>
            </div>
            <div class="card-weaknesses">
                <p class="pokemon-weak">${number["weaknesses"]}</p>
            </div>
        </div>
       `).join("")}
       `
};

function sortingPokemonsUp() {
    let sorted = pokemonData.sort(function(a,b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    goPokemons();
 }; 

 one.addEventListener("click", sortingPokemonsUp());
 
/* function sortedUp() {
    let sorted = pokemonData.sort(function(a,b) {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
    return goPokemons();
}

function sortedDown() {
    let sortedDown = pokemonData.sort(function(a,b) {
        a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
    return goPokemons();
}

one.addEventListener("click", sortedUp);
two.addEventListener("click", sortedDown); */