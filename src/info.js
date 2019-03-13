window.onload = function(){
    return pokemonData;
}

const canvas = document.getElementById("showContent");
const wikio = document.getElementById("wikio");
const egg = document.getElementById("eggsy");
const spawn = document.getElementById("spawnTime");


wikio.addEventListener("click", curio);

// PUXAR OS BOTOES PARA PAGINAS COM AS FREQUENCIAS DE TIPOS E AS COISAS DE PESO E ETC:


function curio() {
};


egg.addEventListener("click", markupEgg);

function lookUpEgg() {
    let eggValue = eggsy.options[eggsy.selectedIndex].value;

    if (eggValue != "") {
        let eggsy = pokemonData.filter(eggy => eggy.egg.includes(eggValue));
        return eggsy;
    }
}

function markupEgg(eggsy) {
    canvas.innerHTML = `
    ${eggsy.map(poke => `
        <div class="eggKM">
            <h3>${poke["egg"]}</h3>
        </div>
        <div class="eggBunch">
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
            </div>
        </div>
    `).join("")}
   `
};


spawn.addEventListener("click", spawnList);


const markupSpawn = `<div class="eggBunchTitle2">
<h3>Egg - 2KM</h3>
</div>
<div class="eggBunchPoke2">puxar pokemons</div>
<div class="eggBunchTitle5">
<h3>Egg - 5KM</h3>
</div>
<div class="eggBunchPoke5">puxar pokemons</div>
<div class="eggBunchTitle7">
<h3>Egg - 7KM</h3>
</div>
<div class="eggBunchPoke7">puxar pokemons
</div>
<div class="eggBunchTitle10">
<h3>Egg - 10KM</h3>
</div>
<div class="eggBunchPoke10">puxar pokemons
</div>
`

function spawnList() {
    canvas.innerHTML = markupSpawn;
};


// fraquezas
const weak = [];

for (let pokemon of pokemonData) {
    weak.push(pokemon.weaknesses);
}

// // tipos
const type = [];

for (pokemon of pokemonData) {
    type.push(pokemon.type);
}

// frequencia de tipo
const typeStats = pokemonData.reduce((info, poke) => {
    info[poke.type] = info[poke.type] + 1 || 1;
    return info;
}, {});
console.log(typeStats);


// frequencia de fraquezas
const weaknessesStats = pokemonData.reduce((info, poke) => {
    info[poke.weaknesses] = info[poke.weaknesses] + 1 || 1;
    return info;
}, {});


// altura media 
const height = [];

for (pokemon of pokemonData) {
    height.push(parseFloat((pokemon.height).slice(0,-2)));
}

let totalHeight = height.reduce((first, elem) => first + elem, 0);
const averageHeight = totalHeight / 151;


// peso medio 
const weight = [];

for (pokemon of pokemonData) {
    weight.push(parseFloat((pokemon.weight).slice(0,-2)));
}

let totalWeight = weight.reduce((first, elem) => first + elem, 0);
const averageWeight = totalWeight / 151;


// altura max e min
const maxHeight = height.reduce(function(a, b) {
    return Math.max(a, b);
});


const minHeight = height.reduce(function(a, b) {
    return Math.min(a, b);
});


// peso max e min 
const maxWeight = weight.reduce(function(a, b) {
    return Math.max(a, b);
});


const minWeight = weight.reduce(function(a, b) {
    return Math.min(a, b);
});


// // media spawn - ja o average ou fazer a media da chance?


// separar os pokemons por km de egg - quantos km andar? (usar sort?)
// colocar em colunas os ovos de cada km e embaixo os pokemons correspondentes de cada ovo (nao precisa explicar)
let eggsy = [];

for (data of pokemonData) {
    for (pokemon in data) {
        // descobrir como colocar itens diferentes numa array numa iteração
    }
}




// // separar os pokemons por spawn time - horario que eles chocam/aparecem? (usar sort?)
// // colocar em colunas o horario de spawn e embaixo os pokemons correspondentes de cada horario (nao precisa explicar)