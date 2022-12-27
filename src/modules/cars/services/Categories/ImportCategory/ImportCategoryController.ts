import { Request, Response } from "express";

import { ImportCategoryService } from "./ImportCategoryService";

export class ImportCategoryController {
    constructor(private importCategoryService: ImportCategoryService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;

        if (!file) {
            return response.json("Error on import file");
        }
        await this.importCategoryService.execute(file);
        return response.send("Success on import file");
    }
}
