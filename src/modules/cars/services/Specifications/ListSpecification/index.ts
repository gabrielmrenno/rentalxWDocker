import { SpecificationRepository } from "../../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationsService } from "./ListSpecificationsService";

export default (): ListSpecificationController => {
    const specificationRepository = new SpecificationRepository();
    const listSpecificationService = new ListSpecificationsService(
        specificationRepository
    );
    const listSpecificationController = new ListSpecificationController(
        listSpecificationService
    );

    return listSpecificationController;
};
