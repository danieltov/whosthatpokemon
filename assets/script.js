/*

# PSUEDZ

## Create Data Object
A model of the data object (based on a names object I found on GitHub)

* pokedex
..*pokemon
...*name
...*number
...*img
...*cry 



## On Load, Randomly Set Level

-generate Pokeball inside div.image

-Use Math.random() to randomly generate index and pull from master pokemon array.
Something like:
let rand = Math.floor(Math.random() * 152); 

-Create variable that targets pokedex.pokemon.name @ rand. Something like:
let pokeName = pokedex[rand].name;

-Count the characters in pokeName with pokeName.length().
let nameLen = pokeName.length();

-Generate x underscores "_" in div.word, where x = nameLen, using a loop. 
Something like:

    for(let i = 0; i < nameLen); i++) { 
        document.querySelector(".word").insertAdjacentHTML("beforeend", " <span>_</span> ");
    }



## On Keydown, Do Stuff With Event.Key

- set variable for key event, let guess = event.key

- after every key event, lower "Guesses left". Something like:

    let guessesLeft = 20

    document.onkeyup = function(k) 
        if (k.which >= 65 && k.which <= 90)
        guessesLeft--
        document.querySelector("span.guesses").innerHTML = guessesLeft

- if guess exists in pokeName, check for multiple instances with loop. replace underscores in div.word with letter. Something like:

    for(let i = 0; i < nameLen; i++) { 
        let idx = pokeName.indexOf(guess);
        if (idx > -1) 
        document.querySelectorAll(".word > span:nth-child(idx)");
        .innerHTML = guess
    }

- if guess does not exist, execute function that adds guess to div.letters.
Something like:
    
    ...    
    else 
        document.querySelector(".letters")
        .insertAdjacentHTML("beforeend", " <strong>"+(guess)+"</strong> ")



## Winning a level
- check if any underscores left in (.word > span). 
- if true, continue game.
- if no underscores left, win level.

Something like.

    for( let i = 0; i < document.querySelector(".word").childElementCount; i++ )    if document.querySelectorAll(".word > span:nth-child(i)").includes("_") === true { continue game }
        else {
            winning level function
        }

- when winning a level, replace pokeball image with url @ pokedex[rand].image
Something like. 

- play pokemon cry. get url @ pokedex[rand].cry.
Something like.

*/