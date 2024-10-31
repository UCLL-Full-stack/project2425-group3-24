export class Card_Deck {
    private card_deck_id: number;
    private deck_name: string;

    constructor(card_deck: {
        card_deck_id: number,
        deck_name: string
    }) {
        this.card_deck_id = card_deck.card_deck_id;
        this.deck_name = card_deck.deck_name;
    }

    getCardDeckId() {
        return this.card_deck_id;
    }

    getDeckName() {
        return this.deck_name;
    }
}