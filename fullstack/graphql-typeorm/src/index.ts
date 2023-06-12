import "reflect-metadata";
import { AppDataSource, createClient } from "./data-source";
import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { ClientResolver } from "./resolvers/client-resolver";

const app: Express = express();

const main = async () =>
{
    await AppDataSource.initialize();
    // await createClient();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, ClientResolver],
            validate: false,
        }),
        context: [AppDataSource]
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    app.use(express.json());
    app.get("/", (_, res) =>
    {
        res.send("Hello World");
    });
    app.listen(4000, () =>
    {
        console.log("App is Running on Port 4000");
    });
};

main();