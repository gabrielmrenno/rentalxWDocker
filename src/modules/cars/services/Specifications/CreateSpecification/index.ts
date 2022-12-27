import { SpecificationRepository } from "../../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationService } from "./CreateSpecificationService";

export default (): CreateSpecificationController => {
    const specificationRepository = new SpecificationRepository();
    const createSpecificationService = new CreateSpecificationService(
        specificationRepository
    );
    const createSpecificationController = new CreateSpecificationController(
        createSpecificationService
    );
    return createSpecificationController;
};
