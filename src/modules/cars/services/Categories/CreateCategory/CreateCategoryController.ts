import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryService } from "./CreateCategoryService";

export class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;
        const createCategoryService = container.resolve(CreateCategoryService);

        try {
            await createCategoryService.execute({ name, description });

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({ err });
        }
    }
}
