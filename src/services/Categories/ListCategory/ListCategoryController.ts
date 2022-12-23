import { Request, Response } from "express";

import { ListCategoryService } from "./ListCategoryService";

export class ListCategoryController {
    constructor(private listCategoryService: ListCategoryService) {}
    handle(request: Request, response: Response): Response {
        const repositories = this.listCategoryService.execute();
        return response.json(repositories);
    }
}
