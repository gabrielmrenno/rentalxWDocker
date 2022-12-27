import { Request, Response } from "express";

import { ListCategoryService } from "./ListCategoryService";

export class ListCategoryController {
    constructor(private listCategoryService: ListCategoryService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const repositories = await this.listCategoryService.execute();
        return response.json(repositories);
    }
}
