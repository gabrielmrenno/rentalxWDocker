import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../../errors/AppError";
import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
export class CreateCategoryService {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) {}
    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists !== null) {
            throw new AppError("Category already exists!", 400);
        }

        this.categoriesRepository.create({ name, description });
    }
}
