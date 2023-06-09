
import "reflect-metadata";
import { AppDataSource } from "./data-source";

const main = async () =>
{
    await AppDataSource.initialize();
    console.log("Successfully Initialized Data Source...");
    // console.log(connection.isInitialized);
};

main().catch(err => console.error(err));