import { Client } from "../entities/Client";
import { MyContext } from "src/types";
import { Arg, Ctx, Query } from "type-graphql";

export class ClientResolver
{

    @Query(() => [Client])
    clients(): Promise<Client[]>
    {
        return Client.find();
    }

    @Query(() => Client)
    client(@Ctx() { em }: MyContext, @Arg("input") id: number): Promise<Client | null>
    {
        const getClient = Client.createQueryBuilder("user").where("user.id = :id", { id }).getOne();
        return getClient;
    }
}