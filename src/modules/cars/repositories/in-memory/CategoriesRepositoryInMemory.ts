import { Category } from "../../entities/category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";

export class CategoriesRepositoryInMemory implements ICategoriesRepository {
    // creating an array of categories = table of categories in memory
    categories: Category[] = [];

    async findByName(name: string): Promise<Category | null> {
        const category = this.categories.find(
            (category) => category.name === name
        );
        return category || null;
    }
    async list(): Promise<Category[]> {
        return this.categories;
    }
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });
        this.categories.push(category);
    }
}
