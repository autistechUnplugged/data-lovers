const checkAtoZ = document.getElementById("alphOrderAtoZ");
const checkZtoA = document.getElementById("alphOrderZtoA");
const one = document.getElementById("one");
const two = document.getElementById("two");

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
 }; 

 one.addEventListener("click", sortingPokemonsUp());
 
/* function sortedUp() {
    pokemonData.sort(function(a,b) {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
    return goPokemons();
}

one.addEventListener("click", sortedUp()); */

/* function sortedDown() {
    let sortedDown = pokemonData.sort(function(a,b) {
        a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
    return goPokemons();
}

one.addEventListener("click", sortedUp);
two.addEventListener("click", sortedDown); */