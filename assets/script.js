/*

# TODO:

*/

let rand,
  pokeName,
  nameLen,
  underscores,
  guess,
  guesses = [],
  found = false, // start with not found
  guessesLeft = 15,
  score = 0;

const init = () => {
  setName();
  setWord();
  keepGoing();
};

const setName = () => {
  rand = Math.floor(Math.random() * 152);
  pokeName = pokedex[rand].name;
  nameLen = pokeName.length;
  underscores = "";
  console.log("Answer: " + pokeName);
};

const setWord = () => {
  for (let i = 0; i < nameLen; ++i) {
    underscores += " <span>_</span> ";
  }
  document.querySelector(".word").innerHTML = underscores;
  document.querySelector(".word").classList.remove("alert", "alert-success");
  document.querySelector(".word").classList.add("alert", "alert-success");
};

// check if any underscores left in .word
const keepGoing = () => {
  if (document.querySelector(".word").innerHTML.includes("<span>_</span>")) {
    document.onkeyup = function(k) {
      // if press a letter...
      if (k.which >= 65 && k.which <= 90) {
        guess = k.key;
        if (!guesses.includes(guess)) {
          guesses.push(guess);
          console.log(guesses);
        }
        if (
          !pokeName.includes(guess) &&
          !document.querySelector(".wrong>span").innerHTML.includes(guess)
        )
          guessesLeft--;
      }

      // update guesses left within span.guesses
      document.querySelector("span.guesses").innerHTML = guessesLeft;

      // lose game functions
      if (guessesLeft === 0) {
        document.querySelector(".container > h1").innerHTML =
          "You Lost, You Loser!";
        document.querySelector(".row").innerHTML =
          "<div class='col'><img src='assets/images/loser.png' alt='You Lost!'></div>";
        setTimeout(reload, 2000);
        function reload() {
          location.reload();
        }
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
    score++;
    document.querySelector(".score > span").innerHTML =
      "<strong>" + score + "</strong>";
    document.querySelector(".guesses").innerHTML = "<strong> You won!</strong>";
    document.querySelector(".image").innerHTML =
      "<img src='" + pokedex[rand].img + "' alt='" + pokeName + "'>";

    // choose a new word
    setTimeout(reset, 1250);
    function reset() {
      guesses = [];
      found = false;
      guessesLeft = 15;
      setName();
      setWord();
      const img = document.querySelector(".image > img");
      img.removeAttribute("src");
      img.setAttribute("src", "assets/images/pokeball.png");
      document.querySelector("span.guesses").innerHTML = guessesLeft;
      document.querySelector(".wrong>span").innerHTML = "";
    }
  }
};

init();
