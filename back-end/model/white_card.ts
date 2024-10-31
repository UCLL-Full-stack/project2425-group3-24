export class White_Card {
    private white_card_id: number;
    private text: string;

    constructor(white_card: {
        white_card_id: number,
        text: string
    }) {
        this.white_card_id = white_card.white_card_id;
        this.text = white_card.text;
    }

    getWhiteCardId() {
        return this.white_card_id;
    }

    getText() {
        return this.text;
    }
}