import { SpecificationRepository } from "../../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationService } from "./CreateSpecificationService";

const specificationRepository = SpecificationRepository.getInstance();
const createSpecificationService = new CreateSpecificationService(
    specificationRepository
);
const createSpecificationController = new CreateSpecificationController(
    createSpecificationService
);

export { createSpecificationController };
