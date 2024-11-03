export class Black_Card {
    private black_card_id: number;
    private card_deck_id: number;
    private text: string;

    constructor(black_card: {
        black_card_id: number,
        card_deck_id: number,
        text: string
    }) {
        this.black_card_id = black_card.black_card_id;
        this.card_deck_id = black_card.card_deck_id;
        this.text = black_card.text;
    }

    getBlackCardId() {
        return this.black_card_id;
    }

    getCardDeckId() {
        return this.card_deck_id;
    }

    getText() {
        return this.text;
    }
}