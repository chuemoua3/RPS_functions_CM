//ROCK PAPER SCISSORS GAME

//variables for each player win count
let playerWin = 0;
let computerWin = 0;

//the duration of the game where it reaches 5 points
playGame('Chue', 'Computer', 5);

//function for playGame thats in a while loop to play until winner reach 5 points
function playGame(player1, computer, playUntil){

    while(playerWin < playUntil && computerWin < playUntil){
        var hand = ['rock', 'paper', 'scissors'];

//function for getHand that returns an array where array [0] = rock, [1] = paper, [2] = scissors
        function getHand(){

            let rand = Math.random();

            if(rand < 0.34){
                return hand[0];
            }else if(rand < 0.67){
                return hand[1];
            }else{
                return hand[2];
            }
        }
//other variables for each players name for getHand
        var computerHand = getHand();
        var userHand = getHand();

        console.log(player1 + ' you have ' + playerWin)
        console.log(computer + ' you have ' + computerWin)

//function for playRound where this is each game scenario of rock/paper/scissors
        function playRound() {
            if(computerHand == userHand){
                return "Computer: " + computerHand + "\nYou: " + userHand + "\nThe result is a tie!";
            }

            if(computerHand == 'rock'){
                if(userHand == 'scissors'){
                    computerWin++;
                    return "Computer: " + computerHand + "\nYou: " + userHand + "\nThe result is you lose!";
                }else {
                    playerWin++;
                    return "Computer: " + computerHand + "\nYou: " + userHand + "\nThe result is you win!";
                }
            }
            
            if(computerHand == 'paper'){
                if(userHand == 'rock'){
                    computerWin++;
                    return "Computer: " + computerHand + "\nYou: " + userHand + "\nThe result is you lose!";
                }else {
                    playerWin++;
                    return "Computer: " + computerHand + "\nYou: " + userHand + "\nThe result is you win!";
                }
            }

            if(computerHand == 'scissors'){
                if(userHand == 'paper'){
                    computerWin++;
                    return "Computer: " + computerHand + "\nYou: " + userHand + "\nThe result is you lose!";
                }else {
                    playerWin++;
                    return "Computer: " + computerHand + "\nYou: " + userHand + "\nThe result is you win!";
                }
            }
            
        }
        console.log(playRound());
    }

    console.log('Great job! the ' + computer + ' had ' + computerWin + '. ' + player1 + ' had ' + playerWin);

}

