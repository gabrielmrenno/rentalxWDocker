import express from "express";
import swaggerUi from "swagger-ui-express";

import "reflect-metadata";
import { connectDataBase } from "./database";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();

const port = process.env.PORT || 3333;

connectDataBase();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(port, () => console.log(`Server running on server ${port}`));
