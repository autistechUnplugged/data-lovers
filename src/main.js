const pokemonData = POKEMON["pokemon"];
const eachPokemon = document.getElementById("eachPokemon");
const ascOrder = document.getElementById("idOrder1to151");
const descOrder = document.getElementById("idOrder151to1");
const checkAtoZ = document.getElementById("alphOrderAtoZ");
const checkZtoA = document.getElementById("alphOrderZtoA");

window.onload = function () {
    goPokemons();
};

function getPokemons() {
    return pokemonData;
};

// tentar deixar isso aqui mais dinamico

function goPokemons() {
    let eachPokemon = document.getElementById("eachPokemon");
    eachPokemon.innerHTML = `
    ${getPokemons().map((number) => `
        <div class="pokemon-card">
            <div class="card-num">
                <h4 class="num-pokemon">${number["num"]}<h3>
            </div>
            <div class="card-title">
                <h3 class="name-pokemon">${number["name"]}</h3>
            </div>
            <div class="card-img">
                <img src="${number["img"]}" class="img-pokemon" />
            </div>
            <h4>Tipo</h4>
            <div class="card-type">
                <p class="pokemon-type">${number["type"].join(" <br> ")}</p>
            </div>
            <h4>Fraqueza</h4>
            <div class="card-weaknesses">
                <p class="pokemon-weak">${number["weaknesses"].join(" ~ ")}</p>
            </div>
        </div>
       `).join("")}
       `
};

ascOrder.addEventListener('click', orderPokemonUp);
descOrder.addEventListener('click', orderPokemonDown);

function orderPokemonUp() {
    pokemonData.sort(function(a,b) {
        return a.num - b.num;
    });
    return goPokemons();
};

function orderPokemonDown() {
    pokemonData.sort(function(a,b) {
        return b.num - a.num;
    });
    return goPokemons();
}


function sortingPokemonsUp() {
    pokemonData.sort(function(a,b) {
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
    return goPokemons();
 }; 

 function sortingPokemonsDown() {
    pokemonData.sort(function(a,b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return 1;
        }
        if (nameA > nameB) {
            return -1;
        }
        return 0;
    });
    return goPokemons();
 }; 

checkAtoZ.addEventListener("click", sortingPokemonsUp);
checkZtoA.addEventListener("click", sortingPokemonsDown);

let types = pokemonData["type"];
console.log(types);