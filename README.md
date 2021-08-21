# Rock Paper Scissors Lizard Spock
<p>
This game was invented by <b>Sam Kass and Karen Bryla</b> and it was popularized by the American sitcom <b>The Big Bang Theory</b>. Just like the ordinary Rock, Paper and Scissors game, it is a fun game to play with friends and family memmbers. Since, the game is based on random results it introduces the element of fairness into the play. Thus,  players can play without the feeling of being cheated. It has been shown that familiar people playing the ordinary Rock, Paper and Scissors are more likey to draw when they play the game; however, this game reduces the probability of a draw by introducing two more options <b>Lizard and Spock</b>, whick makes the game more fun and challenging.This game is simple and easy to understand and hence it can be played by children and adults. Moreover, this webbased game is accessible to anyone who wants to play the game. Since, the games motto is based on fairness through randomness, it imparts the social value of being fair towards others. </p>

![Website-look](assets/images/Website-look.PNG)

## Existing features

### Nagvigation Bar
<ul>
<li>This is featured on the two pages of the website. The responsive navigation bar allows the user to move between the different pages easily without the need to use the back button. </li>
<li>
 It contains links to the Logo of the page, the Rules page and the Play game page. Furthermore, when the Logo is clicked it takes the user to the rules page.
</li>
</ul>

![navigation-menu](assets/images/nav-bar.PNG)


### The Rules page 

<ul>
<li> This page introduces the user to the name of the game: Rock Paper Scissors Lizard Spock </li>
</ul>

<ul>
<li> The page familiarizes the user with the rules of the game and it clearly shows the user what is considered a win or a loose .</li>
</ul>

<ul>
<li> This page also contains a diagramatic representation of the rules of the game inorder to further help the user understand how the game works, and to see the interactions between the five available options. </li>
<li> It also introduces the user to the icons of the five choices of the game.</li>
</ul>

![rules page](assets/images/rules-body.PNG)



### The Play game page 

<p> This page contains two sections: The game options and the results section</p>

<ul> 
  <li>
   The Game options
   <ul>
     <li>It clearly instructs the user to choose an option to start playing the game and hence avoids confusion on the players part.</li>
     <li> This section contains buttons that represent each of the available choices of the game, and enables the user to make a choice by clicking one of the buttons that refer to a particular choice: Rock, Paper, Scissors, Lizard or Spock. </li>
     <li> The computer makes a random choice with the help of the javascript algorithm.</li>
 </ul>
  </li>
  
![buttons](assets/images/buttons.PNG)


  <li>
  The Game results
     <ul>
     <li> This section is divided into the players and computers area.</li>
       <li> when the user clicks one of the buttons it displays the outcome of the game, and shows the score of the player and the computer on their respective side.</li>
       <li> It also displays one of the following messages depending on who won (player or computer) the game:</li>
         <ul>
           <li> It is a tie! </li>
           <li> You win! </li>
           <li> Computer wins! </li>
        </ul>
      <li> whenever the computer wins the game, it displays an encouragement message: Don't give up!</li>
      <li> This section shows the updated score of the player and computer in each play, and thus the user gets a progress report immediately.</li>   
   </ul>
  </li>
</ul>

![results](assets/images/results.PNG)



### The Footer

<li> The footer contains icons of the five choices of the game and it further reminds the user about the looks of the options.</li>
<li> The icons in the footer also add to the aesthetic value of the page.</li>

![footer](assets/images/footer.PNG)

### Features Left to Implement
 <ul>
  <li> When time allows I would like to improve the game so that the user plays against another player instead of a computer.</li>
</ul>


### Testing 

<ul>
<li>The website works on different browsers: Chrome, Microsoft Edge, Firefox.</li>
<li>The website is responsive and works on the standard screen sizes (ipad,iPad Pro,Surface Duo, Pixel 2, Pixel 2 XL, Moto G4, iphone 6/7/8, iphone 6/7/8 Plus,iphone X, iphone 5/SE and Galaxy S5) of the devtools device toolbar.</li>
<li>The above mentioned features work as expected, the buttons are clickable and allow the user to choose and start the game by clicking them.</li>
<li>The results section of the game display appropriate messages depending on who won the game and update the score of the winner.</li>
</ul>

### Validator Testing
<ul>
<li>HTML
  <ul>
  <li> No error was detected when passing through the official W3C validator.</li>
  </ul> 
</li> 

   [The Rules page-validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjoh201.github.io%2FRock-Paper-Scissors-Lizard-Spock%2Findex.html)

   [The Play Game page-validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjoh201.github.io%2FRock-Paper-Scissors-Lizard-Spock%2Fplaygame.html)
   
  <li>CSS
   <ul>
   <li> An error was detected when passing through the official (Jigsaw) validator and it was corrected. </li>
   </ul>

   [CSS validation](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjoh201.github.io%2FRock-Paper-Scissors-Lizard-Spock%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

   <li> Javascript code
  <ul>
  <li> No error was detected when passing through the official (JSHint) validator, but there were a few minor warnings.</li>
  </ul> 
</li> 

</ul>


