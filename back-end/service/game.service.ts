// src/services/GameService.ts
import { Game } from '../model/game';
import gameDb from '../repository/game.db';

export class GameService {
    private readonly maxAttempts = 10;

    /**
     * Generates a random 4-letter uppercase code.
     */
    private generateCode(): string {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let code = "";
        for (let i = 0; i < 4; i++) {
            code += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        return code;
    }

    /**
     * Creates a new game with a unique code.
     * @param cardDeckId - ID of the card deck.
     * @param timeLimit - Time limit for the game.
     * @param maxPlayers - Maximum number of players.
     * @param winCondition - Winning condition.
     * @returns The created game if successful, otherwise an error.
     */
    createGame(cardDeckId: number, timeLimit: number, maxPlayers: number, winCondition: number): Game | Error {
        let attempts = 0;

        while (attempts < this.maxAttempts) {
            const code = this.generateCode();

            if (!gameDb.gameExists(code)) {
                const newGame = new Game({
                    game_code: code,
                    card_deck_id: cardDeckId,
                    time_limit: timeLimit,
                    max_players: maxPlayers,
                    win_condition: winCondition
                });
                gameDb.addGame(newGame);
                return newGame;
            }

            attempts++;
        }

        return new Error("Unable to generate a unique game code. Please try again.");
    }
}
