import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from "../../../repositories/ISpecificationsRepository";

export class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository) {}
    async execute({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<void> {
        const specificationAlreadyExists =
            await this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists !== null) {
            throw new Error("Specification already exists!");
        }

        await this.specificationsRepository.create({ name, description });
    }
}
