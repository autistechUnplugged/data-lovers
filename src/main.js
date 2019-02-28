const checkAtoZ = document.getElementById("alphOrderAtoZ");
const checkZtoA = document.getElementById("alphOrderZtoA");

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

function sortingPokemons() {
    let sorted = POKEMON["pokemon"].sort(function(a,b) {
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
    sorted.reverse();
}

checkAtoZ.addEventListener("click", sortingPokemons);
checkZtoA.addEventListener("click", sortingPokemons); 