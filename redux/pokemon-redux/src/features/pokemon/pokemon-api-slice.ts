import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Ability, EggGroup, EncounterCondition, EncounterMethod, Gender, Generation, Location, Pokemon, Region } from "./pokemon-return-types";

interface APIResource
{
    name: string,
    url: string;
}

interface Pokemons
{
    count: number,
    results: APIResource[];
}

interface Abilities
{
    count: number,
    results: APIResource[];
}

const pokemonApiReducer = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://pokeapi.co/api/v2"
    }),
    endpoints(builder)
    {
        return {
            fetchMons: builder.query<Pokemons, { limit: number | void, offset: number | void; }>({
                query({ limit, offset })
                {
                    let limitVal: number, offsetVal: number;
                    if (!limit)
                        limitVal = 20;
                    else
                        limitVal = limit;

                    if (!offset)
                        offsetVal = 40;
                    else
                        offsetVal = offset;

                    return `/pokemon/?offset=${offsetVal}&limit=${limitVal}`;
                },
                transformErrorResponse: (
                    response: { status: string | number; },
                    _,
                    __
                ) => response.status,
            }),
            fetchMon: builder.query<Pokemon, { name: string, limit: number | void, offset: number | void; }>({
                query({ name, limit, offset })
                {
                    let limitVal: number, offsetVal: number;
                    if (!limit)
                        limitVal = 20;
                    else
                        limitVal = limit;

                    if (!offset)
                        offsetVal = 40;
                    else
                        offsetVal = offset;

                    return `/pokemon/${name}/?offset=${offsetVal}&limit=${limitVal}`;
                },
                transformErrorResponse: (
                    response: { status: string | number; },
                    _,
                    __
                ) => response.status,
            }),
            getAbilities: builder.query<Abilities, { name: string, limit: number | void, offset: number | void; }>({
                query({ name, limit, offset })
                {
                    let limitVal: number, offsetVal: number;
                    if (!limit)
                        limitVal = 20;
                    else
                        limitVal = limit;

                    if (!offset)
                        offsetVal = 40;
                    else
                        offsetVal = offset;

                    return `/pokemon/${name}/?offset=${offsetVal}&limit=${limitVal}`;
                },
                transformErrorResponse: (
                    response: { status: string | number; },
                    _,
                    __
                ) => response.status,
            }),
            getAbility: builder.query<Ability, { name: string, limit: number | void, offset: number | void; }>({
                query({ name, limit, offset })
                {
                    let limitVal: number, offsetVal: number;
                    if (!limit)
                        limitVal = 20;
                    else
                        limitVal = limit;

                    if (!offset)
                        offsetVal = 40;
                    else
                        offsetVal = offset;

                    return `/pokemon/${name}/?offset=${offsetVal}&limit=${limitVal}`;
                },
                transformErrorResponse: (
                    response: { status: string | number; },
                    _,
                    __
                ) => response.status,
            }),
        };
    }
});

export const { useFetchMonsQuery } = pokemonApiReducer;