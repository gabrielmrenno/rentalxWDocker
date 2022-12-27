import { Request, Response } from "express";

import { ListSpecificationsService } from "./ListSpecificationsService";

export class ListSpecificationController {
    constructor(private listSpecificationService: ListSpecificationsService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const specifications = await this.listSpecificationService.execute();

        return response.json(specifications);
    }
}
