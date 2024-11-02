type Game = {
    game_code: string,
    card_deck_id: number,
    time_limit: number,
    max_players: number,
    win_condition: number
}

type Player = {
    id: number,
    username: string,
    score: number,
    is_host: boolean
}
