export class Player {
    private id: number;
    private username: string;
    private score: number;
    private is_host: boolean;

    constructor(player: {
        id: number
        username: string,
        score: number,
        is_host: boolean
    }) {
        this.id = player.id;
        this.username = player.username;
        this.score = player.score;
        this.is_host = player.is_host
    }

    getId() {
        return this.id;
    }

    getUsername() {
        return this.username;
    }

    getScore() {
        return this.score;
    }

    getIsHost() {
        return this.is_host;
    }
}