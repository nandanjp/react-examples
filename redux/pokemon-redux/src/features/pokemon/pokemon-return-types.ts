interface RelationType
{
    name: string,
    url: string;
}

export interface Ability
{
    id: number,
    name: string,
    is_main_series: boolean,
    generation: RelationType,
    effect_entries: {
        effect: string;
    }[],
    pokemon: {
        is_hidden: boolean,
        pokemon: RelationType;
    }[];
}

export interface EggGroup
{
    id: number,
    name: string,
    pokemon_species: RelationType[];
}

export interface EncounterCondition
{
    id: number,
    name: string,
    values: RelationType[];
}

export interface EncounterMethod
{
    id: number,
    name: string,
    names: {
        name: string;
    }[];
}

export interface Gender
{
    id: number,
    name: string,
    pokemon_species_details: {
        rate: number,
        pokemon_species: RelationType;
    }[],
    required_for_evolution: RelationType[];
}

export interface Generation
{
    id: number,
    name: string,
    main_region: RelationType[],
    moves: RelationType[],
    pokemon_species: RelationType[];
}

export interface Location
{
    id: number,
    name: string,
    region: RelationType;
}

interface PokemonSprite
{
    back_default?: string,
    back_female?: string,
    back_shiny?: string,
    back_shiny_female?: string,
    front_default?: string,
    front_female?: string,
    front_shiny?: string,
    front_shiny_female?: string,
}

interface PokemonStat
{
    base_stat: number,
    stat: RelationType[];
}

interface PokemonType
{
    type: RelationType[];
}

export interface Pokemon
{
    id: number,
    name: string,
    base_experience: number,
    height: number,
    weight: number,
    abilities: {
        is_hidden: boolean,
        ability: RelationType;
    }[],
    moves: {
        move: RelationType;
    }[],
    species: RelationType[],
    sprites: PokemonSprite,
    stats: PokemonStat[],
    types: PokemonType[];
}

export interface Region
{
    id: number,
    name: string,
    locations: RelationType[],
    main_generation: RelationType,
    version_groups: RelationType[];
}