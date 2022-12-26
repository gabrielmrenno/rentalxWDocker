import { SpecificationRepository } from "../../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationsService } from "./ListSpecificationsService";

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationService = new ListSpecificationsService(
    specificationRepository
);
const listSpecificationController = new ListSpecificationController(
    listSpecificationService
);

export { listSpecificationController };
