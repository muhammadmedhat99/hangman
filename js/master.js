// my letters
let letters = "abcdefghijklmnopqrstuvwxyz";

// get array from letters
let lettersArray = Array.from(letters);

// select letters from html
let letterscontainer = document.querySelector(".letters");

//generate letters
lettersArray.forEach((letter) => {
    // create span
    let span = document.createElement("span");

    // add class on span
    span.className = "letter-box";

    // create letter text node
    let theLetter = document.createTextNode(letter);

    // add text node to the span
    span.appendChild(theLetter);

    // append span to the letters container
    letterscontainer.appendChild(span);
});

// objects of words + categories
let words = {
    programming: [
        "php",
        "python",
        "java",
        "javascript",
        "mysql",
        "dart",
        "scala",
    ],
    movies: [
        "prestige",
        "inception",
        "interstellar",
        "memento",
        "coco",
        "whiplash",
        "revenant",
        "encanto",
        "venom",
        "joker",
        "avengers",
        "The Shawshank Redemption",
        "Knives Out",
        "Nobody",
        "Belfast",
        "Encanto",
        "The Suicide Squad",
        "Fight Club",
    ],
    people: [
        "albert einstein",
        "alexander",
        "cleopatra",
        "gandi",
        "zedane",
        "cristiano ronaldo",
        "messi",
        "salah",
        "Dwayne Johnson",
        "Joe Biden",
        "Donald Trump",
        "Jeff Bezos",
        "Robert Downey Jr",
        "Taylor Swift",
        "Oprah Winfrey",
        "Usher",
        "Muhammad medhat",
    ],
    countries: [
        "egypt",
        "usa",
        "russia",
        "qatar",
        "germany",
        "england",
        "china",
        "iraq",
    ],
    sports: [
        "football",
        "volleyball",
        "Basketball",
        "Tennis",
        "Cricket",
        "Table Tennis",
        "Baseball",
        "Golf",
    ],
    brands: [
        "Amazon",
        "Apple",
        "Google",
        "Microsoft",
        "Tencent",
        "Facebook",
        "Alibaba",
        "Visa",
        "Mastercard",
    ],
};

// get random proparety

let allKeys = Object.keys(words);

let randomPropNum = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNum];
let randomPropValue = words[randomPropName];

let randomValueNum = Math.floor(Math.random() * randomPropValue.length);
let randomValueName = randomPropValue[randomValueNum];

// set category info
document.querySelector(".category span").innerHTML = randomPropName;

// select letters guess element
let lettersGuessContainer = document.querySelector(".letters-guess");

// convert chosen word to array
let lettersAndSpaces = Array.from(randomValueName);

// create the true letters counter
let lettersTrueCount = 0;

// create spans depend on the word
lettersAndSpaces.forEach((letter) => {
    // create empty span
    let emptySpan = document.createElement("span");

    // if letter is space
    if (letter === " ") {
        emptySpan.className = "with-space";
        lettersTrueCount++;
    }

    // append span to letters guess container
    lettersGuessContainer.appendChild(emptySpan);
});

// selct all spans on letters guess
let guessSpans = document.querySelectorAll(".letters-guess span");

// set the wrond attempts number
let wrongAttempts = 0;

// get the draw element
let theDraw = document.querySelector(".hangman-draw");

// handling clicking on letters
document.addEventListener("click", (e) => {
    if (e.target.className == "letter-box") {
        e.target.classList.add("clicked");

        // get the clicked letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();

        //the chosen ward
        let theChosenWord = Array.from(randomValueName.toLowerCase());

        // set the chosen status
        let status = false;

        theChosenWord.forEach((wordLetter, wordIndex) => {
            // if the clicked letter equal to the chosen letter
            if (theClickedLetter == wordLetter) {
                // create the wining array
                lettersTrueCount++;

                // loop on all guess spans
                guessSpans.forEach((span, spanIndex) => {
                    // check if the word index = span index
                    if (wordIndex == spanIndex) {
                        // set the letter on his span
                        span.innerHTML = wordLetter;

                        // make the status true
                        status = true;
                    }
                });
                if (lettersTrueCount == randomValueName.length) {
                    winGame();
                }
            }
        });

        // set the attempts and the draw
        if (status != true) {
            // set the wrong attempts
            wrongAttempts++;

            // set the wrong attempts function
            theDraw.classList.add(`wrong-${wrongAttempts}`);

            // play fail sound
            document.getElementById("fail").play();

            if (wrongAttempts == 8) {
                // stop clicking the letter when the game is done
                letterscontainer.classList.add("finished");

                endGame();
            }
        } else {
            // play success sound
            document.getElementById("success").play();
        }
    }
});

// wingame function
function winGame() {
    // create the win div
    let winDiv = document.createElement("div");

    // create the text node
    let winGameText = document.createTextNode(
        `Well Done,The Word Was ${randomValueName}`
    );

    // create the class
    winDiv.className = "popup";

    // add the text to the div
    winDiv.appendChild(winGameText);

    // create the new game button
    let newGameButton = document.createElement("button");

    // append the text on the button
    newGameButton.textContent = "Play Again";

    // append the button to the div
    winDiv.appendChild(newGameButton);

    // append the win div to the body
    document.body.appendChild(winDiv);

    newGameButton.addEventListener("click", function () {
        window.location.reload();
    });
}

function endGame() {
    // create the div
    let div = document.createElement("div");

    // create the text
    let endGameText = document.createTextNode(
        `Game Over The Word Is ${randomValueName}`
    );

    // add the text to the div
    div.appendChild(endGameText);

    // the div class name
    div.className = "popup";

    // create the button
    let button = document.createElement("button");

    // button text content
    button.textContent = "Try Again";

    // add button to the div
    div.appendChild(button);

    // add the div to the page
    document.body.appendChild(div);

    button.addEventListener("click", function () {
        window.location.reload();
    });
}

// change the qustion
let changeQustion = document.querySelector(".ch-button");
changeQustion.addEventListener("click", function () {
    window.location.reload();
});
