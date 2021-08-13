
/**
 * Getting DOM elements and declaring constants
 */
const buttons = document.getElementsByName('buttons');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const message = document.getElementById('message')
const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];


/**
 * Add event listners to the buttons
 */

for(let button of buttons){
    button.addEventListener('click', function(){
    let playerOption = this.getAttribute('data-type');
         playGame(playerOption);
    });
}

/**
 * The game function takes the value of the data-type of the clicked button as a parameter
 */

function playGame(playerOption){

          playerImage.src = `assets/images/${options[playerOption]}.png`;
          playerImage.alt = options[playerOption];

        let computerOption = Math.floor(Math.random()*5)

        computerImage.src = `assets/images/${options[computerOption]}.png`;
        computerImage.alt = options[computerOption];

        let result = determineWinner(options[playerOption], options[computerOption] )
        
        updatePoints(result)       
}

