import { GameService } from "../service/game.service";
import express, { Request, Response } from "express";
import gameRepository from "../repository/game.db";

const router = express.Router();
const gameService = new GameService();

router.post("/create", (req: Request, res: Response) => {
    const { card_deck_id, time_limit, max_players, win_condition } = req.body;

    if (card_deck_id === undefined || time_limit === undefined || max_players === undefined || win_condition === undefined) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const result = gameService.createGame(card_deck_id, time_limit, max_players, win_condition);

    if (result instanceof Error) {
        return res.status(500).json({ error: result.message });
    }

    return res.status(201).json({ game: result });
});

router.get("/", (req: Request, res: Response) => {
    const games = gameRepository.getAllGames();
    return res.status(200).json({ games });
});

export default router;