import { DataSource } from "typeorm";
import { Pokemon } from "./entities/Pokemon/Pokemon";
import { Ability } from "./entities/Pokemon/Ability";
import { Move } from "./entities/Pokemon/Move";
import { Sprites } from "./entities/Pokemon/Sprites";

import { Type } from "./entities/Pokemon/Type";
import { Stats } from "./entities/Pokemon/Stats";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "kujojojojotaro12@!",
    database: "pokemon_db_1",
    synchronize: true,
    logging: true,
    entities: [Pokemon, Type, Ability, Stats, Move, Sprites],
    subscribers: [],
    migrations: [],
});

// export const createPokemon = async (): Promise<Pokemon> =>
// {
//     return Pokemon.save(Pokemon.create({
//         name: "garchomp",
//         pokedex: 492,
//         moves: ["I say"],
//         abilities: ["hello"],
//         front_sprite: "world",
//         back_sprite: "real",
//     }));
// };