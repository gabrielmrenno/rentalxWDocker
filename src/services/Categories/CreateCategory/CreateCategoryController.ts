import { Request, Response } from "express";

import { CreateCategoryService } from "./CreateCategoryService";

export class CreateCategoryController {
    constructor(private createCategoryService: CreateCategoryService) {}
    handle(request: Request, response: Response) {
        const { name, description } = request.body;

        // try {
        this.createCategoryService.execute({ name, description });

        return response.status(201).send();
        // // } catch (error) {
        //     return response.status(400).send(error);
        // }
    }
}
