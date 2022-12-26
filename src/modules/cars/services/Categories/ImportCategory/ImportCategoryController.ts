import { Request, Response } from "express";

import { ImportCategoryService } from "./ImportCategoryService";

export class ImportCategoryController {
    constructor(private importCategoryService: ImportCategoryService) {}
    handle(request: Request, response: Response): Response {
        const { file } = request;

        if (!file) {
            return response.json("Error on import file");
        }
        this.importCategoryService.execute(file);
        return response.send();
    }
}
