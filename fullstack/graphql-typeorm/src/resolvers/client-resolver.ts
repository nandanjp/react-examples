import { Client } from "../entities/Client";
import { MyContext } from "src/types";
import { Ctx, Query } from "type-graphql";

export class ClientResolver
{

    @Query(() => [Client])
    people(
        @Ctx() { em }: MyContext
    ): Promise<Client[]>
    {
        return Client.find();
    }
}