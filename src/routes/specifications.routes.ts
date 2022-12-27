import { Router } from "express";

import { createSpecificationController } from "../modules/cars/services/Specifications/CreateSpecification";
import { listSpecificationController } from "../modules/cars/services/Specifications/ListSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
    return listSpecificationController.handle(request, response);
});

export { specificationsRoutes };
