import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from "@modules/cars/repositories/ISpecificationsRepository";

@injectable()
export class CreateSpecificationService {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsRepository
    ) {}
    async execute({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<void> {
        const specificationAlreadyExists =
            await this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new AppError("Specification already exists!");
        }

        await this.specificationsRepository.create({ name, description });
    }
}
