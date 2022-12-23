import { Router } from "express";

import { createSpecificationController } from "../services/Specifications/CreateSpecification";
import { listSpecificationController } from "../services/Specifications/ListSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
    return listSpecificationController.handle(request, response);
});

export { specificationsRoutes };
