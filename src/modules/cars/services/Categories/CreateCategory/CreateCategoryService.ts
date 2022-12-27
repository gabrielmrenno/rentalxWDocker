import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

export class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}
    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists !== null) {
            throw new Error("Category already exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}
