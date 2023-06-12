import "reflect-metadata";
import { AppDataSource } from "./data-source";
import express from 'express';
import path from "path";
import viewRouter from "./routes/viewRouter";
import pokemonRouter from "./routes/pokemonRouter";
import spotifyRouter from "./routes/spotifyRouter";

const main = async () =>
{
    await AppDataSource.initialize();
    const app = express();

    app.use(express.json({ limit: "10kb" }));
    app.use(express.raw());
    app.use(express.static(path.join(__dirname, "public")));

    app.use("/", viewRouter);
    app.use("/api/pokemon", pokemonRouter);
    app.use("/api/spotify", spotifyRouter);

    app.get("/", (_, res) =>
    {
        res.send("<h1>Hello World</h1>");
    });
    app.listen(4000, () =>
    {
        console.log("Now running on port 4000");
    });
};

main();