import { Router } from "express";

const pokemonRouter: Router = Router({ mergeParams: true });

pokemonRouter.get("/mons/:name");
pokemonRouter.get("/all");
pokemonRouter.get("/types/:type");
pokemonRouter.get("/moves/:move");
pokemonRouter.get("/abilities/:ability");
pokemonRouter.get("/sprite/:ability");

export default pokemonRouter;