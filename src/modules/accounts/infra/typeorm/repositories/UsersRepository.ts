import { Repository } from "typeorm";

import { AppDataSource } from "@shared/infra/typeorm/ormconfig";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../entities/user";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = AppDataSource.getRepository(User);
    }

    async create({
        name,
        password,
        email,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            driver_license,
            email,
            password,
        });

        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.repository.findOneBy({ email });

        return user;
    }

    async findById(id: string): Promise<User | null> {
        const user = await this.repository.findOneBy({ id });

        return user;
    }
}

export { UsersRepository };
