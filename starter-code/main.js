
/*document.getElementById('next').innerHTML = '<a href="http://www.amazon.com/Flamethrowers-Rachel-Kushner/dp/1439142017/ref=sr_1_1?ie=UTF8&qid=1458897183&sr=8-1&keywords=the+flamethrowers">The Flamethrowers</a>'
document.querySelector('li').innerHTML = "The wind up <strong>Bird</strong> Chronicle."
document.querySelectorAll('li')[3].textContent = "I'm the fourth!"
document.getElementsByClassName('current')[0].innerHTML = "Manipulating the DOM is fun!"
var k = document.getElementsByClassName('current');
for (var i = 0; i < k.length; i++) {
	k[i].className = 'finished';
}
document.getElementById('next').className = 'current';
document.getElementById('next').removeAttribute('id')
document.getElementsByTagName('li')[3].setAttribute('id','next')*/


var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var board = document.getElementById('game-board');
var createCards = function(x) {
	for (var i = 0; i < x; i++) {
		var a = document.createElement('div');
		a.className = 'card';
	
		board.appendChild(a);
	}
}
createCards(4)