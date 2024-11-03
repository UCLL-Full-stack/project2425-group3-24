export class Round {
    private round_id: number;
    private card_czar_id: number;
    private game_id: number;
    private black_card_id: number;
    private winner_id: number;

    constructor(round: {
        round_id: number,
        card_czar_id: number,
        game_id: number,
        black_card_id: number,
        winner_id: number
    }) {
        this.round_id = round.round_id;
        this.card_czar_id = round.card_czar_id;
        this.game_id = round.game_id;
        this.black_card_id = round.black_card_id;
        this.winner_id = round.winner_id;
    }

    getRoundId() {
        return this.round_id;
    }

    getCardCzarId() {
        return this.card_czar_id;
    }

    getGameId() {
        return this.game_id;
    }

    getBlackCardId() {
        return this.black_card_id;
    }

    getWinnerId() {
        return this.winner_id;
    }
}