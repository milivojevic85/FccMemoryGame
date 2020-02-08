const cards = document.querySelectorAll('.memoryCard');

let hasFlippedCard = false;
let firstCard; let secondCard;

function flipCard() {
	this.classList.add('flip');
	if (!hasFlippedCard) {
		// first click
		hasFlippedCard = true;
		firstCard = this;
	} else {
		// second click
		hasFlippedCard = false;
		secondCard = this;
		
		// do cards match?
		console.log(firstCard.dataset.framework);
		console.log(secondCard.dataset.framework);
	}
}



cards.forEach(card => card.addEventListener('click', flipCard));