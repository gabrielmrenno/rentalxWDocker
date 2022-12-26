import { Category } from "../../../modules/model/category";
import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";

export class ListCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}
    execute(): Category[] {
        const categories = this.categoriesRepository.list();
        return categories;
    }
}
