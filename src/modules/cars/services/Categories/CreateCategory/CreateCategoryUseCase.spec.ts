import { AppError } from "../../../../../errors/AppError";
import { InMemoryCategoriesRepository } from "../../../repositories/in-memory/InMemoryCategoriesRepository";
import { CreateCategoryService } from "./CreateCategoryService";

let createCategoryService: CreateCategoryService;
let categoriesRepositoryInMemory: InMemoryCategoriesRepository;

describe("Create a Category", () => {
    // before each test, it'll run this function, creating a new instance of the service and the repository
    beforeEach(() => {
        categoriesRepositoryInMemory = new InMemoryCategoriesRepository();
        createCategoryService = new CreateCategoryService(
            categoriesRepositoryInMemory
        );
    });

    it("should be able to create a new category", async () => {
        // creating a new category test
        const category = {
            name: "Category Test",
            description: "Category description test",
        };
        await createCategoryService.execute({
            name: category.name,
            description: category.description,
        });

        const categoryCreated = await categoriesRepositoryInMemory.findByName(
            category.name
        );

        // checking if the category created has the property id
        expect(categoryCreated).toHaveProperty("id");
    });

    it("should not be able to create a new category with name that already exists", async () => {
        // expecting the function to throw an AppError
        expect(async () => {
            // creating new categories with same name
            const category = {
                name: "Category Test",
                description: "Category description test",
            };

            await createCategoryService.execute({
                name: category.name,
                description: category.description,
            });

            await createCategoryService.execute({
                name: category.name,
                description: category.description,
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
