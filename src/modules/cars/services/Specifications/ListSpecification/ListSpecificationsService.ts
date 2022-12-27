import { inject, injectable } from "tsyringe";

import { Specification } from "../../../entities/specification";
import { SpecificationsRepository } from "../../../repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepository";

@injectable()
export class ListSpecificationsService {
    constructor(
        @inject(SpecificationsRepository)
        private specificationRepository: ISpecificationsRepository
    ) {}
    async execute(): Promise<Specification[]> {
        const specifications = await this.specificationRepository.list();
        return specifications;
    }
}
