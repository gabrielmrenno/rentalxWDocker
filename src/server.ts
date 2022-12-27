import express from "express";
import swaggerUi from "swagger-ui-express";

import "reflect-metadata";

import { connectDatabase } from "./database/ormconfig";
import "./shared/container";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

connectDatabase();

const app = express();

const port = process.env.PORT || 3333;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(port, () => console.log(`Server running on server ${port}`));
