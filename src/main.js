const pokemonData = POKEMON["pokemon"];
const eachPokemon = document.getElementById("eachPokemon");
const sidebar = document.getElementById("sidebar");
const ascOrder = document.getElementById("idOrder1to151");
const descOrder = document.getElementById("idOrder151to1");
const checkAtoZ = document.getElementById("alphOrderAtoZ");
const checkZtoA = document.getElementById("alphOrderZtoA");
const pokeWeak = document.getElementById("pokeWeakness");

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
                <p class="pokemon-type">${number["type"].join(" ")}</p>
            </div>
            <div class="card-weaknesses">
                <p><b>Fraqueza</b></p>
                <p class="pokemon-weak">${number["weaknesses"].join(" ")}</p>
            </div>
            <div class="poke-weight-height">
                <p><b>Peso e Altura</b></p>
                <p class="pokemon-info">${number["weight"]} e ${number["height"]}</p>
            </div>
        </div>
       `).join("")}
       `
};

function makeInvisible() {
    const navbar = document.getElementById("navbar");
    const pokedex = document.getElementById("pokedex");
    pokedex.style.display = "none";
    navbar.style.display = "block";
    eachPokemon.style.display = "block";
}

function makeVisible() {
    pokedex.style.display = "block";
    navbar.style.display = "none";
}

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

for (i = 0; i < pokemonData.length; i++) {
    weak = pokemonData[i]["weaknesses"];
    console.log(weak);
}

function filterWeakPokes() {
    for (i = 0; i < pokemonData.length; i++) {
        let weak = pokemonData[i]["weaknesses"];
        if (weak === pokeWeak.value) {
            return weak;
        }
    }
}

let filterWeaknesses = pokemonData.filter(weak => {
    for (i = 0; i < pokemonData.length; i++) {
        weak = pokemonData[i]["weaknesses"];
        if (weak === pokeWeak.value) {
            return weak;
        }
    }
});

const btn = document.getElementById("btn");

btn.addEventListener("click", filterWeaknesses);

// pokeWeak.addEventListener("change", filterWeaknesses);

sidebar.addEventListener("click", makeInvisible);
checkAtoZ.addEventListener("click", sortingPokemonsUp);
checkZtoA.addEventListener("click", sortingPokemonsDown);
ascOrder.addEventListener('click', orderPokemonUp);
descOrder.addEventListener('click', orderPokemonDown);


// função de filtro para fraquezas

// função pros cards de cada pokemon

// as funções posteriores

// os graficos