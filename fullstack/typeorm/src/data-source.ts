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
    database: "type_orm",
    synchronize: true,
    logging: true,
    entities: [Client, Banker, Transactions],
    subscribers: [],
    migrations: [],
});