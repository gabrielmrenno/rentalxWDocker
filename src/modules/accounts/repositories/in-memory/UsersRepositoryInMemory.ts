import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/user";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepositoryInMemory implements IUsersRepository {
    private users: User[] = [];

    async create({
        name,
        email,
        password,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            name,
            email,
            password,
            driver_license,
        });

        this.users.push(user);
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.users.find((user) => user.email === email) || null;
    }

    async findById(id: string): Promise<User | null> {
        return this.users.find((user) => user.id === id) || null;
    }
}
