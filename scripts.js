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
		if (firstCard.dataset.framework === secondCard.dataset.framework) {
			// it s a match
			firstCard.removeEventListener('click', flipCard);
			secondCard.removeEventListener('click', flipCard);	
			console.log("Function was executed!");
		} else {
			// it s not a match
			setTimeout(() => {
				firstCard.classList.remove('flip');
				secondCard.classList.remove('flip');
			}, 1500);
		}
	}
}



cards.forEach(card => card.addEventListener('click', flipCard));