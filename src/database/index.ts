import { AppDataSource } from "../data-source";

AppDataSource.initialize()
    .then()
    .catch((error) => console.log(error));
