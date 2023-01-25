import "reflect-metadata";
import express, { Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "@shared/container";
import swaggerFile from "../../../swagger.json";
import { AppError } from "../../errors/AppError";
import { connectDatabase } from "../typeorm/ormconfig";
import { router } from "./routes";

connectDatabase();

const app = express();

const port = process.env.PORT || 3333;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use((err: Error, request: Request, response: Response) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    });
});

app.listen(port, () => console.log(`Server running on server ${port}`));
