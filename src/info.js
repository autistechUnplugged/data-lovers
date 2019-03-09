const pokemonData = POKEMON["pokemon"];

function getPokemons() {
    return pokemonData;
};


// pra guardar a array de fraquezas em uma array (pode fazer isso com tipo tambem se for util)
const weak = [];
// tentar trocar por outro for loop
for (let i = 0; i < pokemonData.length; i++) {
    weak.push(pokemonData[i]["weaknesses"]);
}



// frequencia de tipo
const typeStats = pokemonData.reduce((info, poke) => {
    info[poke.type] = info[poke.type] + 1 || 1;
    return info;
}, {});
// console.log(typeStats);


// frequencia de fraquezas
const weaknessesStats = pokemonData.reduce((info, poke) => {
    info[poke.weaknesses] = info[poke.weaknesses] + 1 || 1;
    return info;
}, {});
// console.log(weaknessesStats);


// altura media 
const height = [];

for (let i = 0; i < pokemonData.length; i++) {
    height.push(parseFloat(pokemonData[i]["height"].slice(0,-2)));
}

let totalHeight = height.reduce((first, elem) => first + elem, 0);
const averageHeight = totalHeight / 151;


// peso medio 
const weight = [];

for (let i = 0; i < pokemonData.length; i++) {
    weight.push(parseFloat(pokemonData[i]["weight"].slice(0,-2)));
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

// fazer no menu: botao de curiosidades, botao de informações, botao de stats?, botao de voltar
// aí a partir das informações, essas coisas listadas abaixo
// a partir das curiosidades, todas as médias e min/max e os gráficos
// o voltar volta pra inicial

// media spawn - ja o average ou fazer a media da chance?



// separar os pokemons por km de egg - quantos km andar? (usar sort?)
// colocar em colunas os ovos de cada km e embaixo os pokemons correspondentes de cada ovo (nao precisa explicar)


// separar os pokemons por spawn time - horario que eles chocam/aparecem? (usar sort?)
// colocar em colunas o horario de spawn e embaixo os pokemons correspondentes de cada horario (nao precisa explicar)



// entender esses multipliers ae pra saber o que fazer com eles



// function goPokemons() {
//     eachPokemon.innerHTML = `
//     ${getPokemons().map((poke) => `
//         <div class="pokemon">
//             <div class="card-img">
//                 <img src="${poke["img"]}" class="img-pokemon" />
//             </div>
//             <div class="pokemon-card">
//                 <div class="card-num">
//                     <p class="pokemon-num">#${poke["num"]}<p>
//                 </div>
                
//         </div>
//     `).join("")}
//    `
// };