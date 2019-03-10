const pokemonData = POKEMON["pokemon"];
const eachPokemon = document.getElementById("eachPokemon");
const ascOrder = document.getElementById("idOrder1to151");
const descOrder = document.getElementById("idOrder151to1");
const checkAtoZ = document.getElementById("alphOrderAtoZ");
const checkZtoA = document.getElementById("alphOrderZtoA");

// const sidebar = document.getElementById("sidebar");

window.onload = function () {
    let pokemonData = getPokemons();
    goPokemons(pokemonData);
};

function getPokemons() {
    return pokemonData;
};

// tentar deixar isso aqui mais dinamico

function goPokemons(pokemonDataSource) {
    eachPokemon.innerHTML = `
    ${pokemonDataSource.map(poke => `
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

// função filtro

pokeType.addEventListener('change', typeList);

function typeList() {
    let typeValue = pokeType.options[pokeType.selectedIndex].value;
    let weaknessValue = pokeWeakness.options[pokeWeakness.selectedIndex].value;

    if (weaknessValue != "") {
        if (typeValue == '') {
            console.log("Returning weaknessList from Type");
            return weaknessList();
        }
        
        let pokeType = pokemonData.filter(monster => monster.type.includes(typeValue));
        let pokeWeaknessAndType = pokeType.filter(monster => monster.weaknesses.includes(weaknessValue));

        if (pokeWeaknessAndType == '') {
            console.log("Vazio");
            return eachPokemon.innerHTML = "<h1>Sem Pokémom</h1>";
        }
        console.log("Returning FILTERED Weakness And Type from Type");
        return goPokemons(pokeWeaknessAndType);
    } else {
        if (typeValue == '') {
            console.log("Returns PokemonData from Type");
            return goPokemons(pokemonData);
        }
        console.log("Returns PokemonData FILTERED from Type");
        return goPokemons(pokemonData.filter(monster => monster.type.includes(typeValue)));
    }

};

pokeWeakness.addEventListener('change', weaknessList);

function weaknessList() {
    let weaknessValue = pokeWeakness.options[pokeWeakness.selectedIndex].value;
    let typeValue = pokeType.options[pokeType.selectedIndex].value;

    if (typeValue != "") {

        if (weaknessValue == '') {
            console.log("Returning typeList from weaknessList");
            return typeList();
        }

        let pokeWeakness = pokemonData.filter(monster => monster.weaknesses.includes(weaknessValue));
        let pokeTypeAndWeakness = pokeWeakness.filter(monster => monster.type.includes(typeValue));
        if (pokeTypeAndWeakness == '') {
            console.log("Vazio");
            return eachPokemon.innerHTML = "<h1>Sem Pokémom</h1>";
        }
        console.log("Returning FILTERED Type and Weakness from Weakness");
        return goPokemons(pokeTypeAndWeakness);
    } else {
        if (weaknessValue == '') {
            console.log("Returns PokemonData from Weakness");
            return goPokemons(pokemonData);
        }
        console.log("Returns PokemonData FILTERED from Weakness");
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
}


function reset(){
    document.getElementById("pokeType").selectedIndex = 0;
    document.getElementById("pokeWeakness").selectedIndex = 0;


    }

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


sidebar.addEventListener("click", makeInvisible);
checkAtoZ.addEventListener("click", sortingPokemonsUp);
checkZtoA.addEventListener("click", sortingPokemonsDown);
ascOrder.addEventListener('click', orderPokemonUp);
descOrder.addEventListener('click', orderPokemonDown);
