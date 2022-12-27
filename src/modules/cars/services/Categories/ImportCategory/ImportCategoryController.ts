import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoryService } from "./ImportCategoryService";

export class ImportCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;
        const importCategoryService = container.resolve(ImportCategoryService);

        if (!file) {
            return response.json("Error on import file");
        }
        await importCategoryService.execute(file);
        return response.send("Success on import file");
    }
}
