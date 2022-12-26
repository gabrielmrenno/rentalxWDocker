import "reflect-metadata";
import { AppDataSource } from "../ormconfig";

export async function connectDataBase() {
    await AppDataSource.initialize()
        .then(() => {
            console.log("conectado");
        })
        .catch((error) => {
            return console.log(error);
        });
}
