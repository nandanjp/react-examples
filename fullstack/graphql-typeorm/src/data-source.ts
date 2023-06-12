import { DataSource } from "typeorm";
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transactions } from "./entities/Transaction";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "kujojojojotaro12@!",
    database: "awad_fullstack",
    synchronize: true,
    logging: true,
    entities: [Client, Banker, Transactions],
    subscribers: [],
    migrations: [],
});

export const createClient = async (): Promise<Client> =>
{
    return Client.save(Client.create({
        first_name: "This is a Person",
        last_name: "This is their last name",
        email: "kujojosuke@gmail.com",
        card_number: "1234563456",
        balance: 12123123,
        family_members: ["jotaro", "josuke", "giorno", "jolyne"],
    }));
};