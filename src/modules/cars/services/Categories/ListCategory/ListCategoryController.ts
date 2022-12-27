import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoryService } from "./ListCategoryService";

export class ListCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listCategoryService = container.resolve(ListCategoryService);
        const repositories = await listCategoryService.execute();
        return response.json(repositories);
    }
}
