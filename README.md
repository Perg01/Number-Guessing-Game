<h1>Number Guessing Game</h1>

<h2>Overview</h2>
<p>This is a simple Command Line Interface (CLI) based Number Guessing Game where the computer randomly selects a number between 1 and 100, and the user has to guess the number. The user has a limited number of attempts to guess the correct number based on the selected difficulty level. After each round, the user is given the option to continue the game or quit.</p>

<h2>Features</h2>
<ul>
  <li>The game randomly selects a number between 1 and 100.</li>
  <li>The user can select a difficulty level:
    <ul>
      <li><b>Easy</b>: 10 chances to guess the number.</li>
      <li><b>Medium</b>: 7 chances to guess the number.</li>
      <li><b>Hard</b>: 5 chances to guess the number.</li>
    </ul>
  </li>
  <li>After each guess, the game provides feedback on whether the guess was too high or too low.</li>
  <li>If the user fails to guess the number within the allowed chances, they are asked if they want to continue the same game with more chances.</li>
  <li>Option to play one more round with the same random number after running out of chances.</li>
</ul>

<h2>How to Play</h2>
<ol>
  <li>Run the game using Node.js in your terminal.</li>
  <li>Select the difficulty level when prompted.</li>
  <li>Enter your guesses one by one.</li>
  <li>The game will give hints if the guess is too high or too low.</li>
  <li>The game ends when the number is guessed correctly or the user runs out of attempts.</li>
  <li>After the game ends, the user has the option to continue with the same game or quit.</li>
</ol>

<h2>Installation</h2>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/yourusername/number-guessing-game.git</code></pre>
  </li>
  <li>Navigate to the project directory:
    <pre><code>cd number-guessing-game</code></pre>
  </li>
  <li>Install dependencies (if any):
    <pre><code>npm install</code></pre>
  </li>
</ol>

<h2>How to Run</h2>
<p>Run the game in your terminal using Node.js:</p>
<pre><code>node index.js</code></pre>

<h2>Example Output</h2>
<pre>
Welcome to the Number Guessing Game!
I am thinking of a number between 1 and 100.
Please select the difficulty level:
1. Easy (10 chances)
2. Medium (7 chances)
3. Hard (5 chances)
Enter your choice: 2
Enter your guess: 50
Incorrect. The number is lower than 50.
Enter your guess: 25
Incorrect. The number is higher than 25.
Enter your guess: 35
Congratulations! You guessed the number in 3 attempts.
</pre>

<h2>Technologies Used</h2>
<ul>
  <li>Node.js</li>
  <li><code>readline</code> module for handling user input/output</li>
</ul>

<h2>Future Improvements</h2>
<ul>
  <li>Add a timer to track how long it takes to guess the number.</li>
  <li>Implement a scoring system to track high scores across different rounds.</li>
  <li>Add hints to make the game more interactive.</li>
</ul>

---

https://roadmap.sh/projects/number-guessing-game
