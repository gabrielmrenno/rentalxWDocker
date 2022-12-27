import { Request, Response } from "express";

import { CreateCategoryService } from "./CreateCategoryService";

export class CreateCategoryController {
    constructor(private createCategoryService: CreateCategoryService) {}
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        try {
            await this.createCategoryService.execute({ name, description });

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
}
