import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryService } from "./ListCategoryService";

export default (): ListCategoryController => {
    const categoriesRepository = new CategoriesRepository();

    const listCategoryService = new ListCategoryService(categoriesRepository);

    const listCategoryController = new ListCategoryController(
        listCategoryService
    );
    return listCategoryController;
};
