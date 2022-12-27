import { Request, Response } from "express";

import { CreateSpecificationService } from "./CreateSpecificationService";

export class CreateSpecificationController {
    constructor(
        private createSpecificationService: CreateSpecificationService
    ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        try {
            await this.createSpecificationService.execute({
                name,
                description,
            });

            return response.status(201).send();
        } catch (error) {
            return response.status(401).send();
        }
    }
}
