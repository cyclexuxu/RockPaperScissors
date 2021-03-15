const game = () => {
    let pScore = 0;
    let cScore = 0;
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    // match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
            this.style.animation = '';
        });
    });
        const computerOptions = ["rock", "paper", "scissors"];
        options.forEach(option => {
            option.addEventListener("click", function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // CALL COMPARE
                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);
                    updateScore();
                    //update images
                    playHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `/assets/${computerChoice}.png`;
                }, 2000)
                // // console.log("hello there!");
                //Animation
                playHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });
    };
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    const compareHands =(playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        const playerWins = "Player wins!";
        const computerWins = "Computer wins!";
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a Tie!';
            return;
        } else if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = playerWins;
                pScore++;
                return;
            } else {
                winner.textContent = computerWins;
                cScore++;
                return;
            }
        } else if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = computerWins;
                cScore++;
                return;
            } else {
                winner.textContent = playerWins;
                pScore++;
                return;
            }
        } else {
            if (computerChoice === 'rock') {
                winner.textContent = playerWins;
                pScore++;
                return;
            } else {
                winner.textContent = computerWins;
                cScore++;
                return;
            }
        }
    }
    // call inner function;
    startGame();
    playMatch();
};
// start the game
game();