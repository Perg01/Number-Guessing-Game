const { Command } = require('commander');
const program = new Command();
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startGame(chances) {
    const randomNumber = generateRandomNumber();
    let attempts = 0;

    const askForGuess = () => {
        if (attempts < chances) {
            rl.question('Enter your guess: ', (guess) => {
                guess = parseInt(guess);

                if (guess === randomNumber) {
                    console.log(`Congratulations! You guessed the number in ${chances - i} attempts.`);
                    rl.close();
                    return;
                } else if (guess < randomNumber) {
                    console.log(`Incorrect. The number is higher than ${guess}.`);
                } else if (guess > randomNumber) {
                    console.log(`Incorrect. The number is lower than ${guess}.`);
                } else {
                    console.error('Invalid input. Please enter a valid number.');
                }

                attempts++;

                if (attempts === chances) {
                    console.log(`Game Over, you ran out of chances. The correct number was ${randomNumber}.`);
                    rl.close();
                } else {
                    askForGuess();
                }
            });
        }
    };
    askForGuess();
}

function gameUI() {
    console.log('Welcome to the Number Guessing Game!');
    console.log('I am thinking of a number between 1 and 100.');
    console.log('Please select the difficulty level:');
    console.log('1. Easy (10 chances)');
    console.log('2. Medium (7 chances)');
    console.log('3. Hard (5 chances)');

    rl.question('Enter your choice: ', (difficultyLevel) => {

        switch (difficultyLevel) {
            case '1':
                startGame(10);
                break;
            case '2':
                startGame(7);
                break;
            case '3':
                startGame(5);
                break;
            default:
                console.error('Invalid difficulty level.');
                rl.close();
                break;
        }
    });

}

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

gameUI();