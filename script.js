let pokemons = [];
let selectedPokemonElement = null;

async function getPokemon(text) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${text}`);
        const data = await response.json();
        pokemons.push(data);
        loadPokemon(data, pokemons.length - 1);
    } catch (error) {
        console.error('Fehler');
    }
}

function render() {
    const pokemonNames = ["lucario", "groudon", "rayquaza", "arceus", "charmander", "squirtle", "bulbasaur", "pikachu", "eevee", "mew", "mewtwo", "ditto", "snorlax", "dragonite", "lapras"];
    pokemonNames.forEach(name => getPokemon(name));
    revealDivOnClick();
}

function loadPokemon(pokemon, index) {
    const germanNames = {
        "charmander": "Glumanda",
        "squirtle": "Schiggy",
        "bulbasaur": "Bisasam",
        "pikachu": "Pikachu",
        "eevee": "Evoli",
        "mew": "Mew",
        "mewtwo": "Mewtu",
        "ditto": "Ditto",
        "snorlax": "Relaxo",
        "dragonite": "Dragoran",
        "lapras": "Lapras",
        "gengar": "Gengar",
        "garchomp": "Knakrack",
        "lucario": "Lucario",
        "groudon": "Groudon",
        "rayquaza": "Rayquaza",
        "arceus": "Arceus",
        "darkrai": "Darkrai",
        "charizard": "Glurak",
        "blastoise": "Turtok",
        "venusaur": "Bisaflor",
        "blaziken": "Lohgock",
        "sceptile": "Gewaldro",
        "metagross": "Metagross",
        "tyranitar": "Despotar",
        "mudkip": "Hydropi",
        "torchic": "Flemmli",
        "treecko": "Geckarbor",
        "kyogre": "Kyogre",
        "latios": "Latios",
        "latias": "Latias",
        "deoxys": "Deoxys",
        "jirachi": "Jirachi",
        "regice": "Regice",
        "regirock": "Regirock",
        "registeel": "Registeel",
        "regigigas": "Regigigas",
        "heatran": "Heatran",
        "giratina": "Giratina",
        "cresselia": "Cresselia",
        "uxie": "Selfe",
        "mesprit": "Vesprit",
        "azelf": "Tobutz",
        "dialga": "Dialga",
        "palkia": "Palkia",
        "giratina": "Giratina",
        "jigglypuff": "Pummeluff",
        "wigglytuff": "Knuddeluff",
        "clefairy": "Piepi",
        "clefable": "Pixi",
        "vulpix": "Vulpix",
        "ninetales": "Vulnona",
        "growlithe": "Fukano",
        "arcanine": "Arkani",
        "psyduck": "Enton",
        "golduck": "Entoron",
        "abra": "Abra",
        "kadabra": "Kadabra",
        "alakazam": "Simsala",
        "machop": "Machollo",

        "machoke": "Maschock",
        
        "machamp": "Machomei",
        "geodude": "Kleinstein",
        "graveler": "Georok",
        "golem": "Geowaz",
        "gastly": "Nebulak",
        "haunter": "Alpollo",
        "gengar": "Gengar",
        "onix": "Onix",
        "drowzee": "Traumato",
        "hypno": "Hypno",
        "krabby": "Krabby",
        "kingler": "Kingler",
        "voltorb": "Voltobal",
        "electrode": "Lektrobal",
        "exeggcute": "Owei",
        "exeggutor": "Kokowei",
    };

    const germanTypeNames = {
        "water": "Wasser",
        "fire": "Feuer",
        "grass": "Pflanze",
        "electric": "Elektro",
        "normal": "Normal",
        "ice": "Eis",
        "fighting": "Kampf",
        "ground": "Boden",
        "flying": "Flug",
        "psychic": "Psycho",
        "bug": "Käfer",
        "rock": "Gestein",
        "ghost": "Geist",
        "dragon": "Drache",
        "dark": "Unlicht",
        "steel": "Stahl",
        "fairy": "Fee",
        "poison": "Gift"
    };

    document.getElementById('content').innerHTML += /*html*/`
    <div id="pokemon${index}" class="pokemon" >
    
        <div class="title">
        <h1>${germanNames[pokemon.name]}</h1>
        ${pokemon.types.map(type => `<p class="type">${germanTypeNames[type.type.name]}</p>`).join('')}
        <img src="${pokemon.sprites.front_default}" alt="">
        </div>
        <div class="attribute hidden" onclick="revealDivOnClick()"style="display: none; opacity: 0;">    
            <div class="height">    
                <p class="text">Höhe:</p>
                <p class="text">Gewicht:</p>
                <p class="text">HP:</p>
                <p class="text">Angriff:</p>
                <p class="text">Verteidigung:</p>
                <p class="text">Spezial-Verteidigung:</p>
                <p class="text">Spezial-Angriff:</p>
                <p class="text">Initiative:</p>
                <p class="text">Fähigkeit:</p>
                <p class="text">Spezial-Attacke:</p>
                <p class="text">Attacke:</p>
                <p class="text">Typ:</p>
            </div>

            <div class="progress">
                <p class="text">${pokemon.height}<progress class="progressbar" value="${pokemon.height}" max="100"></progress></p>
                <p class="text">${pokemon.weight}<progress class="progressbar" value="${pokemon.weight}" max="100"></progress></p>
                <p class="text">${pokemon.stats[5].base_stat}<progress class="progressbar" value="${pokemon.stats[5].base_stat}" max="100"></progress></p>
                <p class="text">${pokemon.stats[4].base_stat}<progress class="progressbar" value="${pokemon.stats[4].base_stat}" max="100"></progress></p>
                <p class="text">${pokemon.stats[3].base_stat}<progress class="progressbar" value="${pokemon.stats[3].base_stat}" max="100"></progress></p>
            
                <p class="text">${pokemon.stats[1].base_stat}<progress class="progressbar" value="${pokemon.stats[1].base_stat}" max="100"></progress></p>
                <p class="text">${pokemon.stats[2].base_stat}<progress class="progressbar" value="${pokemon.stats[2].base_stat}" max="100"></progress></p>
                <p class="text">${pokemon.stats[0].base_stat}<progress class="progressbar" value="${pokemon.stats[0].base_stat}" max="100"></progress></p>
                <p class="text">${pokemon.abilities[0].ability.name}</p>
                <p class="text">${pokemon.moves[0].move.name}</p>
                <p class="text">${pokemon.moves[0].move.name}</p>
                <p class="text">${germanTypeNames[pokemon.types[0].type.name]}</p>
            </div>

            

        </div>
    
    </div>
    `;
    color(pokemon, index);
    revealDivOnClick();
}

function color(pokemon, index) {
    let x = pokemon.types[0].type.name; // Ändern Sie diese Zeile

    const typeColors = {
        "water": "blue",
        "fire": "red",
        "grass": "green",
        "electric": "yellow",
        "normal": "white",
        "ice": "lightblue",
        "fighting": "brown",
        "ground": "brown",
        "flying": "lightblue",
        "psychic": "pink",
        "bug": "green",
        "rock": "brown",
        "ghost": "purple",
        "dragon": "lightblue",
        "dark": "black",
        "steel": "grey",
        "fairy": "pink",
        "poison": "purple",
        "normal": "orange",
    };

    if (typeColors[x]) {
        document.getElementById('pokemon' + index).style.backgroundColor = typeColors[x];
    }
}
function revealDivOnClick() {
    let pokemonElements = document.querySelectorAll('.pokemon');
    pokemonElements.forEach(pokemonElement => {
        pokemonElement.addEventListener('click', function(event) {
            // Wenn eine Pokemon-Karte bereits ausgewählt ist, setzen Sie sie zurück
            if (selectedPokemonElement) {
                let hiddenElement = selectedPokemonElement.querySelector('.hidden');
                hiddenElement.style.opacity = '0';
                hiddenElement.style.display = 'none';
                selectedPokemonElement.classList.remove('attributes-shown');
                let titleElement = selectedPokemonElement.querySelector('.title');
                titleElement.classList.remove('title-moved');
            }

            // Aktualisieren Sie die ausgewählte Pokemon-Karte
            selectedPokemonElement = this;

            let hiddenElement = this.querySelector('.hidden');
            hiddenElement.style.display = 'flex';
            window.getComputedStyle(hiddenElement).getPropertyValue("opacity"); // Trigger a reflow
            hiddenElement.style.opacity = '1';
            this.classList.add('attributes-shown');
            let titleElement = this.querySelector('.title');
            titleElement.classList.add('title-moved');
        });
    });
}