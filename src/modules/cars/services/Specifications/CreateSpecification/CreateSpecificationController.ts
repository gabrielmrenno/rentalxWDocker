import { Request, Response } from "express";

import { CreateSpecificationService } from "./CreateSpecificationService";

export class CreateSpecificationController {
    constructor(
        private createSpecificationService: CreateSpecificationService
    ) {}
    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        try {
            this.createSpecificationService.execute({ name, description });

            return response.status(201).send();
        } catch (error) {
            console.log(error);
            return response.send();
        }
    }
}
