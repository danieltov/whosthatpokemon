/*

# TODO: Store Game in Object

*/

// create set object
let start = {
  rand: undefined,
  pokeName: undefined,
  nameLen: undefined,
  underscores: "",
  guess: undefined,
  guesses: [],
  found: false,
  guessesLeft: 15,
  score: 0,
  game: function() {
    start.setName();
    start.setWord();
    start.gamePlay();
  },
  setName: function() {
    start.rand = Math.floor(Math.random() * 152);
    console.log(start.rand);
    start.pokeName = pokedex[start.rand].name;
    start.nameLen = start.pokeName.length;
    start.underscores = "";
    console.log("Answer: " + start.pokeName);
  },
  setWord: function() {
    start.underscores = " <span>_</span> ".repeat(start.nameLen);
    $(".word")
      .html(start.underscores)
      .removeClass("alert alert-success")
      .addClass("alert alert-success");
  },
  gamePlay: function() {
    if (
      $(".word")
        .html()
        .includes("_")
    ) {
      console.log("we still have underscores.");
      start.keepGoing();
    } else {
      start.won();
    }
  },
  keepGoing: function() {
    start.listen();
  },
  listen: function() {
    $(window).on("keydown", function(k) {
      if (k.which >= 65 && k.which <= 90) start.guess = k.key;
      start.guessActions();
    });
  },
  guessActions: function() {
    if (start.guesses.includes(start.guess) === false) {
      start.guesses.push(start.guess);
      if (
        start.pokeName.includes(start.guess) === false &&
        $(".wrong>span")
          .html()
          .includes(start.guess) === false
      ) {
        start.found = false;
        start.guessesLeft--;
        $("span.guesses").text(start.guessesLeft);
        start.loseCheck();
        start.wrongGuess();
      } else {
        start.correctGuess();
      }
    }
  },
  loseCheck: function() {
    if (start.guessesLeft === 0) {
      start.lost();
    }
  },
  winCheck: function() {
    if (
      $(".word")
        .html()
        .includes("_") === false
    )
      start.won();
  },
  correctGuess: function() {
    let idx = 0;
    for (let i = 0; i < start.nameLen; i++) {
      idx = start.pokeName.indexOf(start.guess, i);

      if (idx > -1) {
        start.found = true; // found it!
        $(".word>span")
          .eq(idx)
          .text(start.guess);
      } else if (
        idx === -1 && // guess not found in string more than once
        start.guess !== undefined && // user has guessed
        start.pokeName.indexOf(start.guess) === -1 // guess doesn't exist in the word AT ALL
      ) {
        start.found = false; // set found to false
      }
    }
    start.winCheck();
  },
  wrongGuess: function() {
    if (
      !start.found &&
      start.guess !== undefined &&
      !$(".wrong>span")
        .html()
        .includes(start.guess) &&
      $(".word")
        .html()
        .includes("<span>_</span>")
    )
      $(".wrong>span").append(start.guess + " ");
  },
  lost: function() {
    $(".container > h1").text("You Lost, You Loser");
    $(".row").html(
      "<div class='col'><img src='assets/images/loser.png' alt='You Lost!'></div>"
    );
    setTimeout(reload, 2000);
    function reload() {
      location.reload();
    }
  },
  won: function() {
    start.score++;
    $(".score > span").html("<strong>" + start.score + "</strong>");
    $(".guesses").html("<h1> You won!</h1>");
    $(".image").addClass("animated bounce");
    $(".image").html(
      "<img src='" + pokedex[start.rand].img + "' alt='" + start.pokeName + "'>"
    );
    setTimeout(function() {
      start.guesses = [];
      start.found = false;
      start.guessesLeft = 15;
      start.setName();
      start.setWord();
      $(".image")
        .removeClass("animated bounce")
        .children()
        .removeAttr("src")
        .attr("src", "assets/images/pokeball.png");
      $("span.guesses").text(start.guessesLeft);
      $(".wrong>span").empty();
    }, 1750);
  }
};

start.game();
