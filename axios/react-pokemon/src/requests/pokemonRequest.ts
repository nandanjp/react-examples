import axios from "axios";
import reduceStringList from "../utils/reduceLists";

type PokemonData = {
    abilities: [
        {
            ability:
            {
                name: string,
            },
            is_hidden: boolean,
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
};

type PokemonResponse = {
    name: string,
    abilitiesList: string,
    height: number;
    moveList: string,
    sprites: {
        front_default: string,
        back_default: string,
    };
    id: number;
};

export default async function getPokemon(pokemon: string): Promise<PokemonResponse>
{
    const options = {
        method: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        params: {},
        headers: {}
    };
    try
    {
        const res = await axios.request(options);
        const data: PokemonData = res.data;
        const { abilities, height, moves, sprites, id } = data;

        const abilitiesList: string[] = [];
        const movesList: string[] = [];

        for (const { ability } of abilities)
        {
            abilitiesList.push(ability.name);
        }
        for (const { move } of moves)
        {
            movesList.push(move.name);
        }

        const response: PokemonResponse = {
            name: pokemon,
            abilitiesList: reduceStringList(abilitiesList),
            height,
            moveList: reduceStringList(movesList),
            sprites,
            id
        };

        return response;
    } catch (error: any)
    {
        console.log(error);
        return error;
    }
}