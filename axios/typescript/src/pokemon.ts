import { PokemonData, Response } from "./types";

const axios = require("axios").default;


class Pokemon extends HTMLElement
{
    private abilitiesList: string[];
    private pokedexNumber: number;
    private movesList: string[];
    private height: number;
    private front_sprite: string;
    private back_sprite: string;

    constructor(data: PokemonData)
    {
        super();

        const { abilities, game_indices, height, moves, sprites } = data;

        this.abilitiesList = [];
        for (const { ability } of abilities)
        {
            this.abilitiesList.push(ability.name);
        }

        this.pokedexNumber = game_indices[0].game_index;
        this.height = height;

        this.movesList = [];
        for (const { move } of moves)
        {
            this.movesList.push(move.name);
        }

        this.front_sprite = sprites.front_default;
        this.back_sprite = sprites.back_default;
    }

    static async makePokemon(pokemon: string)
    {
        const options = {
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
            params: {},
            headers: {}
        };

        try
        {
            const { data } = await axios.request(options);
            const { abilities, game_indices, height, moves, sprites, id, location_area_encounters } = data;
            for (const { ability, is_hidden } of abilities)
            {
                console.log(`${ability.name}, is_hidden: ${is_hidden}`);
            }
            for (const { game_index } of game_indices)
            {
                console.log(`game_index: ${game_index}`);
            }
            console.log(`height: ${height}`);
            for (const { move } of moves)
            {
                const { name } = move;
                console.log(`move_name: ${name}`);
            }
            const { front_default, back_default } = sprites;
            console.log(`front_default: ${front_default}`);
            console.log(`back_default: ${back_default}`);
            console.log(`id: ${id}`);
            console.log(`location_area_encounters: ${location_area_encounters}`);

            const pokemon: Pokemon = new Pokemon(data);
            document.getElementById("root")?.appendChild(pokemon);
            console.log(pokemon);
        }
        catch (error: any)
        {
            console.log(error);
        }

    }

    connectedCallback()
    {
        this.attachShadow({ mode: "open" });

        // Create nested elements
        const wrapper: HTMLDivElement = document.createElement("div");
        wrapper.setAttribute("class", "pokemon max-w-sm bg-gray-800 border-gray-700 shadow rounded-lg");

        const imgLink: HTMLAnchorElement = document.createElement("a");

        const imgTag: HTMLImageElement = document.createElement("img");
        imgTag.setAttribute("class", "rounded-t-lg");
        imgTag.setAttribute("src", this.front_sprite);
        imgTag.setAttribute("alt", "pokemon image");

        //connect img to the anchor element
        imgLink.appendChild(imgTag);
        //Connect to div
        wrapper.appendChild(imgLink);

        const textWrapper: HTMLDivElement = document.createElement("div");

        //Moves
        const [movesAnchor, movesList] = this.createMovesElement();
        // Abilities
        const [abilitiesAnchor, abilitiesList] = this.createAbilitiesElement();
        // Height
        const [heightTitle, heightText] = this.createHeightElement();
        // Pokedex Number
        const [pokedexAnchor, pokedexText] = this.createPokedexNumberElement();

        textWrapper.appendChild(movesAnchor);
        textWrapper.appendChild(movesList);
        textWrapper.appendChild(abilitiesAnchor);
        textWrapper.appendChild(abilitiesList);
        textWrapper.appendChild(heightTitle);
        textWrapper.appendChild(heightText);
        textWrapper.appendChild(pokedexAnchor);
        textWrapper.appendChild(pokedexText);

        const style: HTMLStyleElement = document.createElement("style");
        style.textContent = `
            .pokemon h5 {
                mb-2 text-2xl font-bold tracking-light text-white
            }

            .pokemon p {
                mb-3 font-normal text-gray-400
            }
        `;

        wrapper.appendChild(textWrapper);
        this.shadowRoot?.append(style, wrapper);
    }


    createAbilitiesElement: () => [HTMLAnchorElement, HTMLParagraphElement] = () =>
    {
        const abilitiesTitle: HTMLHeadingElement = document.createElement("h5");
        abilitiesTitle.textContent = "Abilities List";

        const abilitiesAnchor: HTMLAnchorElement = document.createElement("a");
        abilitiesAnchor.appendChild(abilitiesTitle);

        const abilitiesList: HTMLParagraphElement = document.createElement("p");
        abilitiesList.textContent = this.abilitiesList.reduce((ability: string) => `${ability},`, "");

        return [abilitiesAnchor, abilitiesList];
    };

    createMovesElement: () => [HTMLAnchorElement, HTMLParagraphElement] = () =>
    {
        const movesTitle: HTMLHeadingElement = document.createElement("h5");
        movesTitle.textContent = "Moves List";

        const movesAnchor: HTMLAnchorElement = document.createElement("a");
        movesAnchor.appendChild(movesTitle);

        const movesList: HTMLParagraphElement = document.createElement("p");
        movesList.textContent = this.movesList.reduce((move: string) => `${move},`, "");

        return [movesAnchor, movesList];
    };

    createHeightElement: () => [HTMLAnchorElement, HTMLParagraphElement] = () =>
    {
        const heightTitle: HTMLHeadingElement = document.createElement("h5");
        heightTitle.textContent = "Height";

        const heightAnchor: HTMLAnchorElement = document.createElement("a");
        heightAnchor.appendChild(heightTitle);

        const heightValue: HTMLParagraphElement = document.createElement("p");
        heightValue.textContent = this.height.toString();

        return [heightAnchor, heightValue];
    };

    createPokedexNumberElement: () => [HTMLAnchorElement, HTMLParagraphElement] = () =>
    {
        const pokedexNumberTitle: HTMLHeadElement = document.createElement("h5");
        pokedexNumberTitle.textContent = "Pokedex Number";

        const pokedexAnchor: HTMLAnchorElement = document.createElement("a");
        pokedexAnchor.appendChild(pokedexNumberTitle);

        const pokedexText: HTMLParagraphElement = document.createElement("p");
        pokedexText;
        pokedexText.textContent = this.pokedexNumber.toString();

        return [pokedexAnchor, pokedexText];
    };


}

export default Pokemon;