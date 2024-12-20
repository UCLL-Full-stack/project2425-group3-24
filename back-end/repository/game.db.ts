import { Game } from '../model/game';
import database from './database';

const createGame = async (game: Game): Promise<Game> => {
    try {
        const gamePrisma = await database.game.create({
            data: {
                gameCode: game.getGameCode(),
                hostPlayerId: game.getHostPlayerId(),
                cardDeckId: game.getCardDeck().getId()!,
                timeLimit: game.getTimeLimit(),
                maxPlayers: game.getMaxPlayers(),
                winCondition: game.getWinCondition()
            },
            include: {
                cardDeck: {
                    include: { cards: true }
                },
                players: true,
                rounds: true
            }
        });
        return Game.from(gamePrisma);
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const updateGame = async (game: Game): Promise<Game | null> => {
    try {
        const gamePrisma = await database.game.update({
            where: { gameCode: game.getGameCode() },
            data: {
                gameCode: game.getGameCode(),
                hostPlayerId: game.getHostPlayerId(),
                cardDeckId: game.getCardDeck().getId(),
                timeLimit: game.getTimeLimit(),
                maxPlayers: game.getMaxPlayers(),
                winCondition: game.getWinCondition()
            },
            include: {
                cardDeck: {
                    include: { cards: true }
                },
                players: true,
                rounds: true
            }
        });
        return gamePrisma ? Game.from(gamePrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const deleteGameByGameCode = async (gameCode: string) => {
    try {
        await database.game.delete({
            where: { gameCode: gameCode }
        });
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const getGameByGameCode = async (gameCode: string): Promise<Game | null> => {
    try {
        const gamePrisma = await database.game.findUnique({
            where: { gameCode },
            include: {
                cardDeck: {
                    include: {
                        cards: true
                    }
                },
                players: true,
                rounds: true
            } 
        });

        return gamePrisma ? Game.from(gamePrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

export default {
    createGame,
    updateGame,
    deleteGameByGameCode,
    getGameByGameCode
};
