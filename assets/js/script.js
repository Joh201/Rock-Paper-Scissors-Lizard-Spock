
/**
 * Getting DOM elements and declaring constants
 */
const buttons = document.getElementsByClassName('buttons');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');
const message = document.getElementById('message');
const motivationMessage = document.getElementById('motivation-message');
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
 * The playGame function takes the value of the data-type of the clicked button as a parameter
 */

function playGame(playerOption){

          playerImage.src = `assets/images/${options[playerOption]}.png`;
          playerImage.alt = options[playerOption];

        const computerOption = Math.floor(Math.random()*5);

        computerImage.src = `assets/images/${options[computerOption]}.png`;
    
        computerImage.alt = options[computerOption];

        const result = determineWinner(options[playerOption], options[computerOption]); 
        
        updatePoints(result);       
}


/** The determineWinner function takes two parameters from the array and determines the winner*/
function determineWinner( computerOption, playerOption){

  computerOption = computerImage.alt;
  playerOption =  playerImage.alt;

  if(computerOption === playerOption){
    return 'It is a tie!';
    
  } else if (computerOption !== playerOption){
    if(computerOption === options[0] && playerOption === options[2] ||
      computerOption === options[0] && playerOption === options[3] ||
      computerOption === options[2] && playerOption === options[1] ||
      computerOption === options[2] && playerOption === options[3] ||
      computerOption === options[4] && playerOption === options[0] ||
      computerOption === options[4] && playerOption === options[2] ||
      computerOption === options[1] && playerOption === options[0] ||
      computerOption === options[1] && playerOption === options[4] ||
      computerOption === options[3] && playerOption === options[1] ||
      computerOption === options[3] && playerOption === options[4]){
        return 'Computer wins!';

    } else {
        return 'You win!';
    }
  }
}

/** This function takes the outcome of the determineWinner function as a parameter 
 * and updates the scores of the player and the computer*/

function updatePoints(result){

  if (result === 'Computer wins!'){
    ++computerScore.textContent;
    message.textContent = 'Computer wins!';
    motivationMessage.textContent = "Don't give up!";
    
  } else if (result === 'You win!'){
    ++playerScore.textContent;
     motivationMessage.textContent = '';
     message.textContent = 'You win!';
    
    } else{
      computerScore.textContent;
      playerScore.textContent;
      motivationMessage.textContent = ''; 
      message.textContent = 'It is a tie!';
    } 

}

