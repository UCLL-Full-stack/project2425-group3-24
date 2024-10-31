import { Card_Deck } from "../model/card_deck";

const card_decks = [
    new Card_Deck({
        card_deck_id: 1,
        deck_name: "Default"
    }),
]

const getCardDeckById =({ id }: { id: number }): Card_Deck | null => {
    try {
        return card_decks.find((card_deck) => card_deck.getCardDeckId() === id) || null;
    } catch (error) {
        console.error(error);
        throw new Error("An error occurred while getting a card deck by id");
    }
}

export default {
    getCardDeckById,
}