import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/services/Categories/CreateCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/services/Categories/ImportCategory/ImportCategoryController";
import { ListCategoryController } from "../modules/cars/services/Categories/ListCategory/ListCategoryController";

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

const categoriesRoutes = Router();

const upload = multer({
    dest: "./temp",
});

categoriesRoutes.get("/", () => {
    return listCategoryController.handle;
});

categoriesRoutes.post("/", () => {
    return createCategoryController.handle;
});

categoriesRoutes.post("/import", upload.single("file"), () => {
    return importCategoryController.handle;
});

export { categoriesRoutes };
