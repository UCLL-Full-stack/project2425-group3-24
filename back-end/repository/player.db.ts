import { Player } from "../model/player";

const players = [
    new Player({
        id: 1,
        username: "player1",
        score: 0,
        is_host: true
    }),
]

const getPlayersById =({ id }: { id: number }): Player | null => {
    try {
        return players.find((player) => player.getId() === id) || null;
    } catch (error) {
        console.error(error);
        throw new Error("An error occurred while getting a player by id");
    }
}

export default {
    getPlayersById,
}