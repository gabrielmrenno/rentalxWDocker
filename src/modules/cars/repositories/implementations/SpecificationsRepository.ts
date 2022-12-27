import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database/ormconfig";
import { Specification } from "../../entities/specification";
import {
    ICreateSpecificationDTO,
    ISpecificationsRepository,
} from "../ISpecificationsRepository";

export class SpecificationRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = AppDataSource.getRepository(Specification);
    }

    async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            name,
            description,
        });

        await this.repository.save(specification);
    }
    async list(): Promise<Specification[]> {
        const specifications = await this.repository.find();
        return specifications;
    }
    async findByName(name: string): Promise<Specification | null> {
        const specification = await this.repository.findOneBy({ name });

        return specification;
    }
}
