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


const makeInvisible = () => {
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



window.onload = () => {
    goPokemons(pokemonData);
};

const goPokemons = (pokemonData) => {
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


const typeList = () => {
    let typeValue = pokeType.options[pokeType.selectedIndex].value;
    let weaknessValue = pokeWeakness.options[pokeWeakness.selectedIndex].value;

    if (weaknessValue !== '') {
        if (typeValue === '') {
            return weaknessList();
        }

        let pokeType = pokemonData.filter(monster => monster.type.includes(typeValue));
        let pokeWeaknessAndType = pokeType.filter(monster => monster.weaknesses.includes(weaknessValue));
        
        if (pokeWeaknessAndType === '') {
            return eachPokemon.innerHTML = "<h1>Sem Pokémon</h1>";
        }
        return goPokemons(pokeWeaknessAndType);

    } else {
        if (typeValue === '') {
            return goPokemons(pokemonData);
        }
        return goPokemons(pokemonData.filter(monster => monster.type.includes(typeValue)));
    }
};


const foo = () => {
    if (kindValue !== '') {
        if (opposite === '') {
            return kindValueList();
        }

        let pokeOpposite = pokemonData.filter(monster => monster.opposite.includes(oppositeValue));
        let pokekindValueAndOpposite = pokeOpposite.filter(monster => monster.kind.includes(kindValue));

        if (pokekindValueAndOpposite === '') {
            return eachPokemon.innerHTML = "<h1>Sem Pokémon</h1>";
        }
        return goPokemons(pokekindValueAndOpposite);
    } else {
        if (opposite === '') {
            return goPokemons(pokemonData);
        } return goPokemons(pokemonData.filter(monster => monster.opposite.includes(oppositeValue)));
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


const reset = () => {
    document.getElementById("pokeType").selectedIndex = 0;
    document.getElementById("pokeWeakness").selectedIndex = 0;
};


const orderPokemonUp = () => {
    reset();
    return goPokemons(
        pokemonData.sort((a, b) => {
            return a.num - b.num;
        })
    );
};


const orderPokemonDown = () => {
    reset();
    return goPokemons(
        pokemonData.sort((a, b) => {
            return b.num - a.num;
        })
    );
};


const sortingPokemonsUp = () => {
    reset();
    return goPokemons(pokemonData.sort((a, b) => a.name.localeCompare(b.name)));
};


const sortingPokemonsDown = () => {
    reset();
    return goPokemons(pokemonData.sort((a, b) => b.name.localeCompare(a.name)));
};


const searchPokemon = () => {
    let searchValue = searchInput.value.toUpperCase();
    let pokeName = pokemonData.filter(monster => monster.name.toUpperCase().includes(searchValue));
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