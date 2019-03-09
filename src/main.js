const pokemonData = POKEMON["pokemon"];
const eachPokemon = document.getElementById("eachPokemon");
const ascOrder = document.getElementById("idOrder1to151");
const descOrder = document.getElementById("idOrder151to1");
const checkAtoZ = document.getElementById("alphOrderAtoZ");
const checkZtoA = document.getElementById("alphOrderZtoA");

// const sidebar = document.getElementById("sidebar");

window.onload = function () {
    goPokemons();
};

function getPokemons() {
    return pokemonData;
};

// tentar deixar isso aqui mais dinamico

function goPokemons() {
    eachPokemon.innerHTML = `
    ${getPokemons().map((poke) => `
        <div class="pokemon">
            <div class="card-img">
                <img src="${poke["img"]}" class="img-pokemon" />
            </div>
            <div class="pokemon-card">
                <div class="card-num">
                    <p class="pokemon-num">#${poke["num"]}<p>
                </div>
                <div class="card-title">
                    <h3 class="pokemon-name">${poke["name"]}</h3>
                </div>
                <div class="info">
                    <p class="pokemon-type">${poke["type"].join(" / ")}</p>
                    <p class="sub">Tipo</p>
                </div>
                <div class="info">
                    <p class="pokemon-weight">${poke["weight"]}</p>
                    <p class="sub">Peso</p>
                </div>
                <div class="info">
                    <p class="pokemon-height">${poke["height"]}</p>
                    <p class="sub">Altura</p>
                </div>
                <div class="card-candy">
                    <p class="pokemon-candy">${poke["candy"]}</p>
                    <p class="sub">Candy</p>
                </div>
                <div class="card-candy-evo">
                    <p class="pokemon-candy-evo">${poke["candy_count"]}</p>
                    <p class="sub">Quantidade para evoluir</p>
                </div>
            </div>
        </div>
    `).join("")}
   `
};

function makeInvisible() {
    const navbar = document.getElementById("navbar");
    const pokedex = document.getElementById("pokedex");
    const initial = document.getElementById("initial");
    const another = document.getElementById("another");
    pokedex.style.display = "none";
    initial.style.display = "none";
    navbar.style.display = "flex";
    eachPokemon.style.display = "block";
    another.style.display = "block";
};


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


sidebar.addEventListener("click", makeInvisible);
checkAtoZ.addEventListener("click", sortingPokemonsUp);
checkZtoA.addEventListener("click", sortingPokemonsDown);
ascOrder.addEventListener('click', orderPokemonUp);
descOrder.addEventListener('click', orderPokemonDown);
