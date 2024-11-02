import { Game } from "../model/game";

const games: Game[] = [];

const getGamesById = ({ id }: { id: string }): Game | null => {
    try {
        return games.find((game) => game.getGameCode() === id) || null;
    } catch (error) {
        console.error(error);
        throw new Error("An error occurred while getting a game by id");
    }
};

const addGame = (game: Game): void => {
    games.push(game);
};

const gameExists = (code: string): boolean => {
    return games.some(game => game.getGameCode() === code);
};

const getAllGames = (): Game[] => {
    return games;
};

export default {
    getGamesById,
    addGame,
    gameExists,
    getAllGames
};
