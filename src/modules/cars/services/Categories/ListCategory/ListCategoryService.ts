import { Category } from "../../../entities/category";
import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";

export class ListCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}
    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.list();
        return categories;
    }
}
