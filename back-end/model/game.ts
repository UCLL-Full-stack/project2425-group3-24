export class Game {
    private game_code: string;
    private card_deck_id: number;
    private time_limit: number;
    private max_players: number;
    private win_condition: number;

    constructor(game: {
        game_code: string,
        card_deck_id: number,
        time_limit: number,
        max_players: number,
        win_condition: number
    }) {
        this.game_code = game.game_code;
        this.card_deck_id = game.card_deck_id;
        this.time_limit = game.time_limit;
        this.max_players = game.max_players;
        this.win_condition = game.win_condition;
    }

    getGameCode() {
        return this.game_code;
    }

    getCardDeckId() {
        return this.card_deck_id;
    }

    getTimeLimit() {
        return this.time_limit;
    }

    getMaxPlayers() {
        return this.max_players;
    }

    getWinCondition() {
        return this.win_condition;
    }
}