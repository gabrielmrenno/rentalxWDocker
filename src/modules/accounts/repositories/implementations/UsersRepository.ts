import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database/ormconfig";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/user";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = AppDataSource.getRepository(User);
    }

    async create({
        name,
        username,
        password,
        email,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            username,
            driver_license,
            email,
            password,
        });

        await this.repository.save(user);
    }
}

export { UsersRepository };
