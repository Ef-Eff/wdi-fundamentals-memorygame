
var cards = ['queen', 'queen', 'king', 'king'];
var cardAmount = cards.length
var cardsInPlay = [];
var currentScore = 0;
var cardsFlipped = 0;
var board = document.getElementById('game-board');
var scoreNumber = document.querySelector('#scoreNumber');
function createCards() {
	for (var i = 0; i < cards.length; i++) {
		var a = document.createElement('div');
		a.className = 'card';
		a.setAttribute('data-card', cards[i]);
		a.addEventListener('click', isTwoCards);
		board.appendChild(a);
	}
}

function isMatch(cards) {
  if (cards[0] == cards[1]) {
  	currentScore++
  	document.querySelector('#scoreNumber').innerHTML = currentScore;
  	 if (currentScore == 10) {
    	scoreNumber.style.cssText = 'font-size:50px;color:red;font-family:papyrus;';
    }
    alert('You found a match!');
  } else {
    alert('Sorry, try again.');
  }
  clearCards();
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') == 'king') {
		this.innerHTML = '<img src="King.png" alt="King of Spades">';
	} else {
		this.innerHTML = '<img src="Queen.png" alt="Queen of Spades">';
	}
	if (cardsInPlay.length == 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
function clearCards() {
	for (i = 0; i < cardAmount; i++) {
    	document.querySelectorAll('.card')[i].innerHTML = ''; 
    }
}
createCards()



