import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationsService } from "./ListSpecificationsService";

export class ListSpecificationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listSpecificationService = container.resolve(
            ListSpecificationsService
        );
        const specifications = await listSpecificationService.execute();

        return response.json(specifications);
    }
}
