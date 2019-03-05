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
    eachPokemon.innerHTML = `
    ${getPokemons().map((number) => `
        <div class="pokemon-card">
            <div class="card-num">
                <h4 class="pokemon-num">${number["num"]}<h4>
            </div>
            <div class="card-title">
                <h3 class="pokemon-name">${number["name"]}</h3>
            </div>
            <div class="card-img">
                <img src="${number["img"]}" class="img-pokemon" />
            </div>
            <div class="card-type">
                <p><b>Tipo</b></p>
                <p class="pokemon-type">${number["type"].join(" * ")}</p>
            </div>
            <div class="card-weaknesses">
                <p><b>Fraqueza</b></p>
                <p class="pokemon-weak">${number["weaknesses"].join(" * ")}</p>
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
};

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
/*
checkZtoA.addEventListener("click", sortingPokemonsDown);

let types = pokemonData["type"];
console.log(types);
*/
checkZtoA.addEventListener("click", sortingPokemonsDown)

