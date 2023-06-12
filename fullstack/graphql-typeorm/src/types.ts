import { DataSource } from "typeorm";

export type MyContext = {
    em: DataSource;
};