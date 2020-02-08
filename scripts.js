const cards = document.querySelectorAll('.memoryCard');

let hasFlippedCard = false;
let firstCard; let secondCard;

function flipCard() {
	this.classList.add('flip');
	if (!hasFlippedCard) {
		// first click
		hasFlippedCard = true;
		firstCard = this;
		
		console.log({hasFlippedCard, firstCard});
	}
}



cards.forEach(card => card.addEventListener('click', flipCard));