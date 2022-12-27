import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "ignite-123",
    database: "rentx",
    entities: ["./src/modules/**/entities/*.ts"],
    migrations: ["./src/database/migrations/*.ts"],
    migrationsTableName: "migrations",
});

export function connectDatabase() {
    AppDataSource.initialize()
        .then(() => {
            console.log("conectado");
        })
        .catch((error) => {
            return console.log(error);
        });
}
