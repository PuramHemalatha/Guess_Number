var targetNumber = Math.floor(Math.random() * 20) + 1; // Generate a random number between 1 and 20
        var score = 0;
        var highScore = 0;

        function checkGuess() {
            var guessInput = document.getElementById('guess');
            var messageInput = document.getElementById('message');
            var scoreInput = document.getElementById('score');
            var highScoreInput = document.getElementById('highScore');
            var mainSection = document.getElementById('main-section');

            var guess = parseInt(guessInput.value);

            if (isNaN(guess)) {
                messageInput.value = 'Please enter a valid number.';
                return;
            }

            score++;

            if (guess === targetNumber) {
                messageInput.value = 'Congratulations! You guessed the correct number.';
                if (score < highScore || highScore === 0) {
                    highScore = score;
                    highScoreInput.value = '🏅HIGH SCORE: ' + highScore;
                }
                score = 0;
                targetNumber = Math.floor(Math.random() * 20) + 1;
                mainSection.style.backgroundColor = '#486469'; // Change the background color to green
                document.getElementById('number').textContent = guess; // Display the correct guessed number
                document.getElementById('number').style.color = '#486469'; // Change the color to green
            } else if (guess < targetNumber) {
                messageInput.value = 'Try a higher number.';
            } else {
                messageInput.value = 'Try a lower number.';
            }

            scoreInput.value = '💯SCORE: ' + score;
            guessInput.value = '';
        }

        function playAgain() {
            score = 0;
            targetNumber = Math.floor(Math.random() * 20) + 1;
            document.getElementById('message').value = '🤔START GUESSING';
            document.getElementById('score').value = '💯SCORE';
            document.getElementById('guess').value = '';
            document.getElementById('main-section').style.backgroundColor = ''; // Reset the background color
            document.getElementById('number').textContent = '?';
            document.getElementById('number').style.color = 'black'; // Reset the color to black
        }