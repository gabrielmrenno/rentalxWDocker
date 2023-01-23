import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/services/Specifications/CreateSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../modules/cars/services/Specifications/ListSpecification/ListSpecificationController";

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

const specificationsRoutes = Router();

specificationsRoutes.use(ensureAuthenticated);

specificationsRoutes.post("/", createSpecificationController.handle);

specificationsRoutes.get("/", listSpecificationController.handle);

export { specificationsRoutes };
