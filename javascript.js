let playerScore = 0;
        let computerScore = 0;

        let gameOver = false;

        function playGame(playerChoice) {
            if (gameOver) {
                return; 
            }

            const choices = ['Rock', 'Paper', 'Scissors'];
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            document.getElementById("computerChoice").textContent = computerChoice;
            document.getElementById("playerChoice").textContent = playerChoice;


            let result;
            if (playerChoice === computerChoice) {
                result = 'It\'s a tie!';
            } else if (
                (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
                (playerChoice === 'Paper' && computerChoice === 'Rock') ||
                (playerChoice === 'Scissors' && computerChoice === 'Paper')
            ) {
                result = 'You win!';
            } else {
                result = 'Computer wins!';
            }

            // Update scores based on the game result
            if (result === 'You win!') {
                playerScore++;
            } else if (result === 'Computer wins!') {
                computerScore++;
            }

            document.getElementById("playerScore").textContent = playerScore;
            document.getElementById("computerScore").textContent = computerScore;

            document.getElementById("gameResult").textContent = result;

            if (playerScore === 5 || computerScore === 5) {

                gameOver = true;

                // Display the winner
                if (playerScore === 5) {
                    document.getElementById("gameResult").textContent = "You are the winner!";
                } else {
                    document.getElementById("gameResult").textContent = "Computer is the winner!";
                }

                document.getElementById("playAgainButton").disabled = false;
            }
        }

        function playAgain() {
            playerScore = 0;
            computerScore = 0;
            gameOver = false;

            document.getElementById("gameResult").textContent = "";
            document.getElementById("playerChoice").textContent = "";
            document.getElementById("computerChoice").textContent = "";

            // Update the displayed scores
            document.getElementById("playerScore").textContent = playerScore;
            document.getElementById("computerScore").textContent = computerScore;

            const buttons = document.getElementsByTagName("button");
            for (let button of buttons) {
                button.disabled = false;
            }

            document.getElementById("playAgainButton").disabled = true;
        }