const pokemonData = POKEMON["pokemon"];
const eachPokemon = document.getElementById("eachPokemon");
const ascOrder = document.getElementById("idOrder1to151");
const descOrder = document.getElementById("idOrder151to1");
const checkAtoZ = document.getElementById("alphOrderAtoZ");
const checkZtoA = document.getElementById("alphOrderZtoA");
const pokeType = document.getElementById("pokeType");
const pokeWeakness = document.getElementById("pokeWeakness");
const sidebar = document.getElementById("sidebar");
const searchInput = document.getElementById("searching");

window.onload = function () {
    goPokemons(pokemonData);
};

// function getPokemons() {
//     return pokemonData;
// };

function goPokemons(pokemonData) {
    eachPokemon.innerHTML = `
    ${pokemonData.map(poke => `
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
                <div class="hold">
                    <div class="card-type info">
                        <p class="pokemon-type">${poke["type"].join(" / ")}</p>
                        <p class="sub">Tipo</p>
                    </div>
                    <div class="card-pokemon info">
                        <p class="pokemon-weight">${poke["weight"]}</p>
                        <p class="sub">Peso</p>
                    </div>
                    <div class="card-pokemon info">
                        <p class="pokemon-height">${poke["height"]}</p>
                        <p class="sub">Altura</p>
                    </div>
                </div>
                <div class="card-weaknesses">
                    <p class="pokemon-weaknesses">${poke["weaknesses"].join(" / ")}</p>
                    <p class="sub">Fraqueza</p>
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


// função searchbar
function searching() {
    let searchValue = searchbar.value;
    
};


// função filtro
function typeList() {
    let typeValue = pokeType.options[pokeType.selectedIndex].value;
    let weaknessValue = pokeWeakness.options[pokeWeakness.selectedIndex].value;

    if (weaknessValue != "") {
        if (typeValue === '') {
            return weaknessList();
        }
        
        let pokeType = pokemonData.filter(monster => monster.type.includes(typeValue));
        let pokeWeaknessAndType = pokeType.filter(monster => monster.weaknesses.includes(weaknessValue));

        if (pokeWeaknessAndType === '') {
            return eachPokemon.innerHTML = "<h1>Sem Pokémom</h1>";
        }
        return goPokemons(pokeWeaknessAndType);
    } else {
        if (typeValue === '') {
            return goPokemons(pokemonData);
        }
        return goPokemons(pokemonData.filter(monster => monster.type.includes(typeValue)));
    }
};


function weaknessList() {
    let weaknessValue = pokeWeakness.options[pokeWeakness.selectedIndex].value;
    let typeValue = pokeType.options[pokeType.selectedIndex].value;

    if (typeValue != "") {

        if (weaknessValue == '') {
            return typeList();
        }

        let pokeWeakness = pokemonData.filter(monster => monster.weaknesses.includes(weaknessValue));
        let pokeTypeAndWeakness = pokeWeakness.filter(monster => monster.type.includes(typeValue));
        if (pokeTypeAndWeakness === '') {
            return eachPokemon.innerHTML = "<h1>Sem Pokémom</h1>";
        }
        return goPokemons(pokeTypeAndWeakness);
    } else {
        if (weaknessValue === '') {
            return goPokemons(pokemonData);
        }
        return goPokemons(pokemonData.filter(monster => monster.weaknesses.includes(weaknessValue)));
    }
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


function reset(){
    document.getElementById("pokeType").selectedIndex = 0;
    document.getElementById("pokeWeakness").selectedIndex = 0;
};

function orderPokemonUp() {
    reset();
    return goPokemons(
        pokemonData.sort(function (a, b) {
            return a.num - b.num;
        }));
};


function orderPokemonDown() {
    reset();
    return goPokemons(
        pokemonData.sort(function (a, b) {
            return b.num - a.num;
        }));
};


function sortingPokemonsUp() {
    reset();
    return goPokemons(
        pokemonData.sort(function (a, b) {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
    );
};


function sortingPokemonsDown() {
    reset();
    return goPokemons(
        pokemonData.sort(function (a, b) {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }
            return 0;
        })
    );
};


function searchPokemon() {
    let searchWord = searchInput.value.toUpperCase();
    let pokeName = pokemonData.filter(monster => monster.name.toUpperCase().includes(searchWord));
    return goPokemons(pokeName);
};


searchInput.addEventListener('keyup', searchPokemon);
sidebar.addEventListener("click", makeInvisible);
checkAtoZ.addEventListener("click", sortingPokemonsUp);
checkZtoA.addEventListener("click", sortingPokemonsDown);
ascOrder.addEventListener("click", orderPokemonUp);
descOrder.addEventListener("click", orderPokemonDown);
pokeType.addEventListener("change", typeList);
pokeWeakness.addEventListener("change", weaknessList);