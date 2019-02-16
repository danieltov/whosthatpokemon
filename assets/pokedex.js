let counter = 0;

let pokedex = [
  {
    name: "bulbasaur",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "ivysaur",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "venusaur",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "charmander",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "charmeleon",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "charizard",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "squirtle",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "wartortle",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "blastoise",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "caterpie",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "metapod",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "butterfree",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "weedle",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "kakuna",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "beedrill",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "pidgey",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "pidgeotto",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "pidgeot",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "rattata",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "raticate",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "spearow",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "fearow",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "ekans",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "arbok",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "pikachu",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "raichu",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "sandshrew",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "sandslash",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "nidoran",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "nidorina",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "nidoqueen",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "nidoran",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "nidorino",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "nidoking",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "clefairy",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "clefable",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "vulpix",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "ninetales",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "jigglypuff",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "wigglytuff",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "zubat",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "golbat",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "oddish",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "gloom",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "vileplume",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "paras",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "parasect",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "venonat",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "venomoth",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "diglett",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "dugtrio",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "meowth",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "persian",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "psyduck",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "golduck",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "mankey",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "primeape",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "growlithe",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "arcanine",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "poliwag",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "poliwhirl",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "poliwrath",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "abra",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "kadabra",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "alakazam",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "machop",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "machoke",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "machamp",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "bellsprout",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "weepinbell",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "victreebel",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "tentacool",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "tentacruel",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "geodude",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "graveler",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "golem",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "ponyta",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "rapidash",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "slowpoke",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "slowbro",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "magnemite",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "magneton",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "farfetch'd",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "doduo",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "dodrio",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "seel",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "dewgong",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "grimer",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "muk",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "shellder",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "cloyster",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "gastly",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "haunter",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "gengar",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "onix",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "drowzee",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "hypno",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "krabby",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "kingler",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "voltorb",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "electrode",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "exeggcute",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "exeggutor",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "cubone",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "marowak",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "hitmonlee",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "hitmonchan",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "lickitung",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "koffing",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "weezing",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "rhyhorn",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "rhydon",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "chansey",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "tangela",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "kangaskhan",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "horsea",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "seadra",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "goldeen",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "seaking",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "staryu",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "starmie",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "mrmime",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "scyther",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "jynx",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "electabuzz",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "magmar",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "pinsir",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "tauros",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "magikarp",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "gyarados",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "lapras",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "ditto",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "eevee",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "vaporeon",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "jolteon",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "flareon",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "porygon",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "omanyte",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "omastar",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "kabuto",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "kabutops",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "aerodactyl",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "snorlax",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "articuno",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "zapdos",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "moltres",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "dratini",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "dragonair",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "dragonite",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "mewtwo",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  },
  {
    name: "mew",
    img: "assets/images/pokemon" + ++counter + ".ico",
    cry: "assets/cries/" + counter + ".ogg"
  }
];
