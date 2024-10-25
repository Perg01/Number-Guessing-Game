const { Command } = require('commander');
const program = new Command();
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startGame(chances, randomNumber, attempts = 0) {

    if (attempts < chances) {
        rl.question('Enter your guess: ', (guess) => {
            guess = parseInt(guess);

            if (guess === randomNumber) {
                console.log(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
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
                continueGame(chances, randomNumber, attempts);
            } else {
                startGame(chances, randomNumber, attempts); // Pass the updated attempts value();
            }

        });
    }
}

function continueGame(chances, randomNumber, attempts) {
    rl.question('Would you like to continue the current match and play one more round? (Y/N): ', (answer) => {
        if (answer.toLowerCase() === 'y') {
            startGame(chances + 1, randomNumber, attempts);
        } else {
            console.log(`Thank you for playing. The correct number was: ${randomNumber}`);
            rl.close();
        }
    });
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
                startGame(10, generateRandomNumber(), 0);
                break;
            case '2':
                startGame(7, generateRandomNumber(), 0);
                break;
            case '3':
                startGame(5, generateRandomNumber(), 0);
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