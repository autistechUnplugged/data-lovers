let eachPokemon = document.getElementById("eachPokemon");
let ascOrder = document.getElementById("idOrder-1to151");
let descOrder = document.getElementById("idOrder-151to1");

window.onload = function () {
    goPokemons();
};

function getPokemons() {
    return POKEMON["pokemon"];
};

function goPokemons() {
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
}

ascOrder.addEventListener('click', orderPokemon);
descOrder.addEventListener('click', orderPokemon);

function orderPokemon() {
    POKEMON["pokemon"].reverse();
    return goPokemons();
}