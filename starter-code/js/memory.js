//console.log('checking connection');
class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    //First: Need to randomply pick a position of my cards array.
    //Second: Need to "cut" the first array. In arrays, cut means splice.
    //Third: Need to "paste" the selected element into the new array. In arrays, paste means push.

    let shuffleCardsArray = [];

    for (let i = this.cards.length; i > 0; i--) {
      const randomlyPickedPosition = parseInt(Math.random() * i);
      const randomlyPickedCard = this.cards.splice(randomlyPickedPosition, 1);
      shuffleCardsArray.push(randomlyPickedCard);
    }

    this.cards = shuffleCardsArray;

    //Number 1
    let shuffledArray = [];
    for (let i = this.cards.length; i > 0; i--) {
      //second
      const randomNumber = parseInt(Math.random() * i);
      let pickedCard = this.cards.splice(randomNumber, 1);
      //third
      shuffledArray.push(pickedCard);
    }
    this.cards = shuffledArray;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
