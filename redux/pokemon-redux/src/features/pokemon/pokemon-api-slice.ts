import { FetchBaseQueryMeta, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Ability, EggGroup, EncounterCondition, EncounterMethod, Gender, Generation, Location, Pokemon, Region } from "./pokemon-return-types";

interface APIResource
{
    name: string,
    url: string;
}

interface GetAll
{
    count: number,
    results: APIResource[];
}

const returnLimitAndOffset: (limit: number | void, offset: number | void) => { limitVal: number, offsetVal: number; } = (limit, offset) =>
{
    const limitVal = limit ? limit : 20;
    const offsetVal = offset ? offset : 40;
    return { limitVal, offsetVal };
};

const returnReqUrl: (name: string, queryParams: { nameId?: string, limit: number, offset: number; }) => string = (name, queryParams) =>
{
    const { nameId, limit, offset } = queryParams;
    return `/${name}/${nameId ? nameId + "/" : ""}?limit=${limit}&offset=${offset}`;
};

const queryBuilder: (name: string, params: { nameId?: string, limit: number | void, offset: number | void; }) => string = (name, { nameId, limit, offset }) =>
{
    const { limitVal, offsetVal } = returnLimitAndOffset(limit, offset);
    return returnReqUrl(name, { nameId, limit: limitVal, offset: offsetVal });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const transformErrorResponse = (response: { status: string | number; }, _: FetchBaseQueryMeta | undefined, __: {
    limit: number | void;
    offset: number | void;
}) => response.status;

export const pokemonApiReducer = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://pokeapi.co/api/v2"
    }),
    endpoints(builder)
    {
        return {
            fetchMons: builder.query<GetAll, { limit: number | void, offset: number | void; }>({
                query({ limit, offset })
                {
                    return queryBuilder("pokemon", { limit, offset });
                },
                transformErrorResponse
            }),
            fetchMon: builder.query<Pokemon, { name: string, limit: number | void, offset: number | void; }>({
                query({ name, limit, offset })
                {
                    return queryBuilder("pokemon", { nameId: name, limit, offset });
                },
                transformErrorResponse
            }),
            getAbilities: builder.query<GetAll, { limit: number | void, offset: number | void; }>({
                query({ limit, offset })
                {
                    return queryBuilder("ability", { limit, offset });
                },
                transformErrorResponse
            }),
            getAbility: builder.query<Ability, { name: string, limit: number | void, offset: number | void; }>({
                query({ name, limit, offset })
                {
                    return queryBuilder("ability", { nameId: name, limit, offset });
                },
                transformErrorResponse
            }),
            getEggGroups: builder.query<GetAll, { limit: number | void, offset: number | void; }>({
                query({ limit, offset })
                {
                    return queryBuilder("egg-group", { limit, offset });
                },
                transformErrorResponse
            }),
            getEggGroup: builder.query<EggGroup, { name: string, limit: number, offset: number | void; }>({
                query({ name, limit, offset })
                {
                    return queryBuilder("egg-group", { nameId: name, limit, offset });
                },
                transformErrorResponse
            }),
            getEncounterConditions: builder.query<GetAll, { limit: number | void, offset: number | void; }>({
                query({ limit, offset })
                {
                    return queryBuilder("encounter-condition", { limit, offset });
                },
                transformErrorResponse
            }),
            getEncounterCondition: builder.query<EncounterCondition, { name: string, limit: number | void, offset: number | void; }>({
                query({ name, limit, offset })
                {
                    return queryBuilder("encounter-condition", { nameId: name, limit, offset });
                },
                transformErrorResponse
            }),
            getEncounterMethods: builder.query<GetAll, { limit: number | void, offset: number | void; }>({
                query({ limit, offset })
                {
                    return queryBuilder("encounter-method", { limit, offset });
                },
                transformErrorResponse
            }),
            getEncounterMethod: builder.query<EncounterMethod, { name: string, limit: number | void, offset: number | void; }>({
                query({ name, limit, offset })
                {
                    return queryBuilder("encounter-method", { nameId: name, limit, offset });
                }
            }),
            getGenders: builder.query<GetAll, { limit: number | void, offset: number | void; }>({
                query({ limit, offset })
                {
                    return queryBuilder("gender", { limit, offset });
                },
                transformErrorResponse
            }),
            getGender: builder.query<Gender, { name: string, limit: number | void, offset: number | void; }>({
                query({ name, limit, offset })
                {
                    return queryBuilder("gender", { nameId: name, limit, offset });
                }
            }),
            getGenerations: builder.query<GetAll, { limit: number | void, offset: number | void; }>({
                query({ limit, offset })
                {
                    return queryBuilder("generation", { limit, offset });
                },
                transformErrorResponse
            }),
            getGeneration: builder.query<Generation, { name: string, limit: number | void, offset: number | void; }>({
                query({ name, limit, offset })
                {
                    return queryBuilder("generation", { nameId: name, limit, offset });
                }
            }),
            getLocations: builder.query<GetAll, { limit: number | void, offset: number | void; }>({
                query({ limit, offset })
                {
                    return queryBuilder("location", { limit, offset });
                },
                transformErrorResponse
            }),
            getLocation: builder.query<Location, { name: string, limit: number | void, offset: number | void; }>({
                query({ name, limit, offset })
                {
                    return queryBuilder("location", { nameId: name, limit, offset });
                }
            }),
            getRegions: builder.query<GetAll, { limit: number | void, offset: number | void; }>({
                query({ limit, offset })
                {
                    return queryBuilder("region", { limit, offset });
                },
                transformErrorResponse
            }),
            getRegion: builder.query<Region, { name: string, limit: number | void, offset: number | void; }>({
                query({ name, limit, offset })
                {
                    return queryBuilder("region", { nameId: name, limit, offset });
                }
            }),
        };
    }
});

export const { useFetchMonsQuery, useFetchMonQuery, useGetAbilitiesQuery, useGetAbilityQuery, useGetEggGroupsQuery, useGetEggGroupQuery, useGetEncounterConditionsQuery, useGetEncounterConditionQuery, useGetEncounterMethodsQuery, useGetEncounterMethodQuery, useGetGendersQuery, useGetGenderQuery, useGetGenerationsQuery, useGetGenerationQuery, useGetLocationsQuery, useGetLocationQuery, useGetRegionsQuery, useGetRegionQuery } = pokemonApiReducer;