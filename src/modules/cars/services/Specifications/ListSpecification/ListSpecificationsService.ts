import { Specification } from "../../../entities/specification";
import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

export class ListSpecificationsService {
    constructor(private specificationRepository: ISpecificationsRepository) {}
    async execute(): Promise<Specification[]> {
        const specifications = await this.specificationRepository.list();
        return specifications;
    }
}
