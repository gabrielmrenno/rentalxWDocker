import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserService } from "./createUserService";

export class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, driver_license, email, password } = request.body;

        const createUserService = container.resolve(CreateUserService);

        await createUserService.execute({
            name,
            driver_license,
            email,
            password,
        });

        return response.status(201).send();
    }
}
