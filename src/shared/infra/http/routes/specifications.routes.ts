import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/services/Specifications/CreateSpecification/CreateSpecificationController";
import { ListSpecificationController } from "@modules/cars/services/Specifications/ListSpecification/ListSpecificationController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

const specificationsRoutes = Router();

specificationsRoutes.use(ensureAuthenticated);

specificationsRoutes.post("/", createSpecificationController.handle);

specificationsRoutes.get("/", listSpecificationController.handle);

export { specificationsRoutes };
