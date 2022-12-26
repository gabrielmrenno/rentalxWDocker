import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/services/Categories/CreateCategory";
import { importCategoryController } from "../modules/cars/services/Categories/ImportCategory";
import { listCategoryController } from "../modules/cars/services/Categories/ListCategory";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./temp",
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoryController.handle(request, response);
});

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
