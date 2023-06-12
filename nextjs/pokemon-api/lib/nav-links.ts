export type NavLink = {
    name: string,
    slug: string,
    description?: string;
};

export const NavItems: { name: string, links: NavLink[]; }[] = [
    {
        name: "Pokemon",
        links: [
            {
                name: "Get Pokemon Type",
                slug: "pokemon/types"
            },
            {
                name: "Get Pokemon Abilities",
                slug: "pokemon/abilities"
            },
            {
                name: "Get Pokemon Moves",
                slug: "pokemon/moves"
            },
        ]
    },
    {
        name: "music",
        links: [
            {
                name: "Artist Description",
                slug: "music/artist"
            },
            {
                name: "Artist's Albums",
                slug: "music/albums"
            },
            {
                name: "Top Songs",
                slug: "music/top-songs"
            },
        ]
    }
];