let counter = 0;

let pokedex = [
  {
    name: "bulbasaur",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "ivysaur",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "venusaur",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "charmander",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "charmeleon",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "charizard",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "squirtle",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "wartortle",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "blastoise",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "caterpie",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "metapod",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "butterfree",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "weedle",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "kakuna",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "beedrill",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "pidgey",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "pidgeotto",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "pidgeot",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "rattata",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "raticate",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "spearow",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "fearow",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "ekans",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "arbok",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "pikachu",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "raichu",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "sandshrew",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "sandslash",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "nidoran",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "nidorina",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "nidoqueen",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "nidoran",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "nidorino",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "nidoking",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "clefairy",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "clefable",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "vulpix",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "ninetales",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "jigglypuff",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "wigglytuff",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "zubat",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "golbat",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "oddish",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "gloom",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "vileplume",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "paras",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "parasect",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "venonat",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "venomoth",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "diglett",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "dugtrio",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "meowth",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "persian",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "psyduck",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "golduck",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "mankey",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "primeape",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "growlithe",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "arcanine",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "poliwag",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "poliwhirl",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "poliwrath",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "abra",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "kadabra",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "alakazam",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "machop",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "machoke",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "machamp",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "bellsprout",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "weepinbell",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "victreebel",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "tentacool",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "tentacruel",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "geodude",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "graveler",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "golem",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "ponyta",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "rapidash",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "slowpoke",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "slowbro",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "magnemite",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "magneton",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "farfetch'd",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "doduo",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "dodrio",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "seel",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "dewgong",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "grimer",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "muk",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "shellder",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "cloyster",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "gastly",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "haunter",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "gengar",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "onix",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "drowzee",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "hypno",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "krabby",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "kingler",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "voltorb",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "electrode",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "exeggcute",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "exeggutor",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "cubone",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "marowak",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "hitmonlee",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "hitmonchan",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "lickitung",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "koffing",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "weezing",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "rhyhorn",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "rhydon",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "chansey",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "tangela",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "kangaskhan",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "horsea",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "seadra",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "goldeen",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "seaking",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "staryu",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "starmie",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "mr. mime",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "scyther",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "jynx",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "electabuzz",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "magmar",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "pinsir",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "tauros",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "magikarp",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "gyarados",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "lapras",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "ditto",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "eevee",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "vaporeon",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "jolteon",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "flareon",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "porygon",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "omanyte",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "omastar",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "kabuto",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "kabutops",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "aerodactyl",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "snorlax",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "articuno",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "zapdos",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "moltres",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "dratini",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "dragonair",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "dragonite",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "mewtwo",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  },
  {
    name: "mew",
    img: "images/pokemon" + ++counter + ".ico",
    cry: "cries/" + counter + ".ogg"
  }
];
