import { CreateCategoryService } from "./CreateCategoryService";

describe("Create a Category", () => {
    it("should be able to create a new category", () => {
        // problem, create category need some dependencies (repository)
        const createCategory = new CreateCategoryService();
    });
});
