/*

# TODO:


*/

// # SET LEVEL

let rand = Math.floor(Math.random() * 152),
  pokeName = pokedex[rand].name,
  nameLen = pokeName.length,
  underscores = "";

console.log("Name: " + pokeName);

const setWord = () => {
  for (let i = 0; i < nameLen; ++i) {
    underscores += " <span>_</span> ";
  }
  document.querySelector(".word").innerHTML = underscores;
};

setWord();

// # PLAY GAME!

// ### set game variables
let guess,
  guesses = [],
  found = false, // start with not found
  guessesLeft = 15;

// check if any underscores left in .word
const keepGoing = () => {
  if (document.querySelector(".word").innerHTML.includes("<span>_</span>")) {
    // if true, run game functions

    // key events!

    document.onkeyup = function(k) {
      // if press a letter...
      if (k.which >= 65 && k.which <= 90) {
        guess = k.key;
        if (!guesses.includes(guess)) {
          guesses.push(guess);
          console.log(guesses);
          --guessesLeft;
        }
      }

      // update guesses left within span.guesses
      document.querySelector("span.guesses").innerHTML = guessesLeft;

      // lose game functions
      if (guessesLeft === 0) {
        document.querySelector(".container > h1").innerHTML =
          "You Lost, You Loser!";
        document.querySelector(".row").innerHTML =
          "<div class='col'><img src='assets/images/loser.png' alt='You Lost!'></div>";
        return;
      }

      let idx = 0;
      // if guess exists in pokeName, check for multiple instances with loop. replace underscores in div.word with letter.
      for (let i = 0; i < nameLen; i++) {
        idx = pokeName.indexOf(guess, i);

        if (idx > -1) {
          found = true; // found it!
          document.querySelectorAll(
            ".word > span:nth-of-type(" + (idx + 1) + ")"
          )[0].innerHTML = guess;
        } else if (
          idx === -1 && // guess not found in string after index
          guess !== undefined && // user has guessed
          pokeName.indexOf(guess) === -1 // guess doesn't exist in the word AT ALL
        ) {
          found = false; // set found to false
        }
      }
      keepGoing();
      if (
        !found &&
        guess !== undefined &&
        !document.querySelector(".wrong>span").innerHTML.includes(guess) &&
        document.querySelector(".word").innerHTML.includes("<span>_</span>")
      ) {
        document
          .querySelector(".wrong>span")
          .insertAdjacentHTML("beforeend", " " + guess + " ");
      }
    };
  } else {
    // win game functions

    document.querySelector(".guesses").innerHTML = "<strong> You won!</strong>";
    document.querySelector(".image").innerHTML =
      "<img src='" + pokedex[rand].img + "' alt='" + pokeName + "'>";
    return;
  }
};

keepGoing();
