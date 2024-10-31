import { Game } from "../model/game";

const games = [
    new Game({
        game_code: "AAAA",
        card_deck_id: 1,
        time_limit: 60,
        max_players: 10,
        win_condition: 500
    }),
]

const getGamesById =({ id }: { id: string }): Game | null => {
    try {
        return games.find((game) => game.getGameCode() === id) || null;
    } catch (error) {
        console.error(error);
        throw new Error("An error occurred while getting a game by id");
    }
}

export default {
    getGamesById,
}