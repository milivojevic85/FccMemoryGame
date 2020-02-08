const cards = document.querySelectorAll('.memoryCard');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard; let secondCard;

function flipCard() {
	if (lockBoard) return;
	if (this === firstCard) return;
	this.classList.add('flip');
	if (!hasFlippedCard) {
		hasFlippedCard = true;
		firstCard = this;
		return
	}
	hasFlippedCard = false;
	secondCard = this;
	
	checkForMatch();
}

function checkForMatch() {
	let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
	isMatch ? disableCards() : unflipCards();
}

function disableCards() {
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);
}
function unflipCards() {
	lockBoard = true;
	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');
		lockBoard = false;
	}, 1500);
}

cards.forEach(card => card.addEventListener('click', flipCard));