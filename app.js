let guessField = document.querySelector(".guessField");
let guessSubmit = document.querySelector(".guessSubmit");

let randomNumber = Math.floor(Math.random() * 100 + 1);

let guessCount = 1;
let nums = []
function checkGuess() {
    let guessNumber = guessField.value;

    if (randomNumber === guessNumber) {
        nums.push(guessNumber)
        alert("you win")
    }
    else if (guessCount === 10) {
        alert("Game over you lose")
    }
    else {
        nums.push(guessNumber)
        if (guessCount > guessNumber) {
            alert("High")
        } else if (guessCount < guessNumber) {
            alert("Low")
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus()
}

guessSubmit.addEventListener('click', checkGuess)