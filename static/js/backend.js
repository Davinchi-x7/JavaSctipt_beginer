function ageInDays() {
    var birthYear = prompt('What year were you born...Good friend');
    var ageInDays = [2023- birthYear] * 365;
    var h1 = document.createElement('h1')
    var textAnswer = document.createTextNode('You are' +ageInDays + 'days old')
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild[textAnswer];
    document.getElementById['flex-box-result'].appendChild[h1];
}
function generateCat() {
var image = document.createElement('img');
var div = document.getElementById('flex-cat-gen')
image.src = "https://cdn2.thecatapi.com/images/5k7.gif"
div.appendChild(image);
}

function reset1(){
  document.getElementById('flex-cat-ge').remove();
  
}

function rpsGame(yourChoice) {
    console.log(yourChoice);
    
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice:', botChoice);
    
    results = decideWinner(humanChoice, botChoice); //  
    console.log(results);
    
    message = finalMessage(results); // '{message': 'You Won!', 'color': 'green'}
    console.log(message);
    
    rpsFrontEnd(humanChoice, botChoice, message);
  }
  
function randToRpsInt() {
    return Math.floor(Math.random() * 3);

}
function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return {'message': 'You lost!', 'color': 'red'};
  } else if (yourScore === 0.5) {
    return {'message': 'You tried!', 'color': 'yellow'};
  } else {
    return {'message': 'You won', 'color': 'green'};
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // to remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div')
    var botDiv = document.createElement('div')
    var messageDiv = document.createElement('div')
    //var replayDiv = document.createElement('button')

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 30px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding:30px '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 30px 50px rgba(37, 50, 233, 1);'>"
    
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

    

}

/*function reset() {
  document.getElementById('rpsGame').remove();
}*/

// challenge 4: Change the color of all buttons
var all_buttons = document.getElementsByTagName('button');


var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}



function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === 'red') {
    buttonsRed();
  } else if (buttonThingy.value === 'green'){
    buttonsGreen();
  }else if (buttonThingy.value === 'reset'){
    buttonColorReset();
  }else if (buttonThingy.value === 'random'){
    randomColors();
  }
}

function buttonsRed() {
  for (let i=0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}
function buttonsGreen() {
  for (let i=0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}
function buttonColorReset() {
  for (let i=0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}


function randomColors() {
  var choices = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'];

  for (let i=0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}

// Black Jack Challenge

let blackjackGame = {
  'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score':0},
  'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score':0},
  'cards': ['2','3', '4', '5','6','7','8','9','10','K','J','Q', 'A'],
  'cardsMap': {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'K':10, 'J':10,'Q':10, 'A':[1, 11]},
  'wins': 0,
  'losses':0,
  'draws':0,
  'isStand': false,
  'turnsOver': false,

};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

function blackjackHit() {
  if (blackjackGame['isStand'] === false){
    let card = randomCard();
    //console.log(card);
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
    //console.log(YOU['score']);
  }
    
}


function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame['cards'][randomIndex];
}
function showCard(card, activePlayer){
  if (activePlayer['score'] <+ 21){
    let cardImage = document.createElement('img');
    cardImage.src = `static/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
  }
  
}
 
function blackjackDeal(){
  //let winner = computeWinner();
  //showResult(winner);
  if (blackjackGame['turnsOver'] === true) {

    blackjackGame['isStand'] = false;

    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
  
    for (i=0; i < yourImages.length; i++){
      yourImages[i].remove();
    }
    for (i=0; i < dealerImages.length; i++){
      dealerImages[i].remove();
    }
  
    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;

    document.querySelector('#your-blackjack-result').style.color = '#ffffff';
    document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';

    document.querySelector('#blackjack-result').textContent = "Let's Play";
    document.querySelector('#blackjack-result').style.color = "black";
  
    blackjackGame['turnsOver'] = true;
  }
  
}



function updateScore(card, activePlayer) {
  if (card === 'A') {
  // if adding 11 keeps me below 21, add 11 otherwise add 1
  if (activePlayer['scpre'] + blackjackGame['cardsMap'][card][1] <= 21) {
    activePlayer['score'] += blackjackGame['cardsMap'][card][1];
  } else{
    activePlayer['score'] += blackjackGame['cardsMap'][card][0];
  }
} else {
    activePlayer['score'] += blackjackGame['cardsMap'][card];
  } 
}
function showScore(activePlayer) {
  if (activePlayer['score'] > 21){
    document.querySelector(activePlayer['scoreSpan']).textContent = 'BURST!';
    document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
  }else{
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
  }
}
function dealerLogic()  {
  blackjackGame['isStand'] = true;
  let card = randomCard();
  showCard(card, DEALER);
  updateScore(card, DEALER);
  showScore(DEALER); 
  //showResult(computeWinner());

  if (DEALER['score'] > 15) {
    blackjackGame['turnsOver'] = true;
    console.log(blackjackGame['turnsOver']);
    let winner = computeWinner();
    showResult(winner);
  }
}
// compute winner and return who just won
// update the wins, draws and losses
function computeWinner(){
  let winner;

  if (YOU['score'] <=21){
    //condition: higher score than dealer or when dealer bursts but you dont
    if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21){
      blackjackGame['wins']++;
     // console.log('You Won!');
      winner = YOU;

    }else if (YOU['score'] < DEALER['score']) {
      blackjackGame['losses']++;
      //console.log('You Lost!');
      winner = DEALER;

    } else if (YOU['score'] === DEALER['score']){
      blackjackGame['draws']++;
      //console.log('You Drew!');
    }

    //condition: when user bursts but dealer doesnt
  }else if (YOU['score'] > 21 && DEALER['score'] <= 21){
    blackjackGame['losses']++;
    //console.log('You Lost!');
    winner = DEALER;
    //condition: When you and the dealer burst
  } else if(YOU['score'] > 21 && DEALER['score'] > 21) {
    blackjackGame['draws']++;

  }
  console.log(blackjackGame);
  //console.log('Winner is', winner);
  return winner;
}

function showResult(winner){
  let message, messageColor;

  if (blackjackGame['turnsOver'] === true) {
    if (winner === YOU){
      document.querySelector('#wins').textContent = blackjackGame['wins'];
      message = 'You Won';
      messageColor = 'Green';
      winSound.play();
    }else if (winner === DEALER){
      document.querySelector('#losses').textContent = blackjackGame['losses'];
      message = 'You Lost';
      messageColor = 'red';
      lossSound.play();
    } else {
      document.querySelector('#draws').textContent = blackjackGame['draws'];
      message = 'You Drew';
      messageColor = 'black';
    }
  
    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
  }

  
}



