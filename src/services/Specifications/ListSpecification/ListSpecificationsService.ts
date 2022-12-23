import { Specification } from "../../../model/specification";
import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

export class ListSpecificationsService {
    constructor(private specificationRepository: ISpecificationsRepository) {}
    execute(): Specification[] {
        const specifications = this.specificationRepository.list();
        return specifications;
    }
}
