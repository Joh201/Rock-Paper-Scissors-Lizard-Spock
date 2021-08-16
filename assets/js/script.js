
/**
 * Getting DOM elements and declaring constants
 */
const buttons = document.getElementsByClassName('buttons');

const playerScore = document.getElementById('player-score');

const computerScore = document.getElementById('computer-score');

const playerImage = document.getElementById('player-image');

const computerImage = document.getElementById('computer-image');

const message = document.getElementById('message')

const motivationMessage = document.getElementById('motivation-message')

const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
 

/**
 * Add event listners to the buttons
 */
  
  for(let button of buttons){
    button.addEventListener('click', function(){
    let playerOption = this.getAttribute('data-type');
    console.log(typeof(playerOption))
        // alert(`You clicked${playerOption}`)
        playGame(playerOption);
    });
}


/**
 * The game function takes the value of the data-type of the clicked button as a parameter
 */

function playGame(playerOption){

          playerImage.src = `assets/images/${options[playerOption]}.png`;
          console.log(playerImage.src)
          playerImage.alt = options[playerOption];
          console.log(playerImage.alt)

        let computerOption = Math.floor(Math.random()*5)

        computerImage.src = `assets/images/${options[computerOption]}.png`;
        console.log(computerImage.src)
    
        computerImage.alt = options[computerOption];

         let result = determineWinner(options[playerOption], options[computerOption]) 

         console.log(result)
        
        updatePoints(result);       
}


function determineWinner( computerOption, playerOption){

  computerOption = computerImage.alt;
  playerOption =  playerImage.alt;

  if(computerOption === playerOption){
    return 'It is a tie!'
    // message.textContent = 'It is a tie'
    // return message
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
        return 'Computer wins!'
        // message.textContent = 'Computer wins!'
        // return message
    } else {
        return 'You win!'
        // message.textContent = 'You win!'
        // return message
    }
  }
}

function updatePoints(result){

  if (result === 'Computer wins!'){
    ++computerScore.textContent
    console.log(computerScore)
    message.textContent = 'Computer wins!'
    motivationMessage.textContent = "Don't give up!"
    // return message
  } else if (result === 'You win!'){
    ++playerScore.textContent;
    console.log(playerScore)
     motivationMessage.textContent = ''
     message.textContent = 'You win!'
    //  return message
    } else{
      computerScore.textContent
      playerScore.textContent
      motivationMessage.textContent = '' 
      message.textContent = 'It is a tie!'
    } 

}