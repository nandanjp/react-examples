export interface Response
{
    abilities: [
        {
            ability:
            {
                name: string,
            },
            is_hidden: boolean,
        }
    ];
    game_indices: [
        {
            game_index: number,
        }
    ];
    height: number;
    moves: [
        {
            move:
            {
                name: string,
            };
        }
    ];
    sprites: {
        front_default: string,
        back_default: string,
    };
    id: number;
    location_area_encounters: string;
}

export type PokemonData = {
    abilities: [
        {
            ability:
            {
                name: string,
            },
            is_hidden: boolean,
        }
    ];
    game_indices: [
        {
            game_index: number,
        }
    ];
    height: number;
    moves: [
        {
            move:
            {
                name: string,
            };
        }
    ];
    sprites: {
        front_default: string,
        back_default: string,
    };
    id: number;
    location_area_encounters: string;
};