const prompt = require('prompt-sync')()


function compare(num1, num2) {
    let res = false
    if (num1 < num2) {
        console.log(`You guessed ${num1} low`)
    } else if (num1 > num2) {
        console.log(`You guessed ${num1} high`)
    } else {
        res = true
    }
    return res
}

const answer = 8
let guessed = false
const history = [];


do {
    const input = prompt('Guess a number (0-9):')
    const inputNum = Number(input)
    history.push(inputNum);
    console.log(`You have guessed ${history}`);
    guessed = compare(inputNum, answer)
}
while (!guessed)
console.log('You win!')