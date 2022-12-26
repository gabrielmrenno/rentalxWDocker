import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "docker",
    password: "ignite-123",
    database: "rentx",
    migrations: ["./src/database/migrations/*.ts"],
    migrationsTableName: "migrations",
});
