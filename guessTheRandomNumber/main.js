
        // Generate a random number between 1 and 10
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        let attempts = 0;

        const playGame = () => {
            for (let guess; guess !== randomNumber; attempts++) {
                guess = Number(prompt("Guess a number between 1 and 10:"));

                if (guess > randomNumber) {
                    alert("Too high! Try again.");
                }

                if (guess < randomNumber) {
                    alert("Too low! Try again.");
                }

                if (guess === randomNumber) {
                    alert(`Congratulations! You guessed the correct number ${randomNumber} in ${attempts + 1} attempts.`);
                }
            }
        };


        playGame();
