import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}

@injectable()
export class AuthenticateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute({ email, password }: IRequest) {
        // User exists
        const user = await this.usersRepository.findByEmail(email);

        if (user === null) {
            throw new Error("Email or/and password incorrect!");
        }
        // Password is correct
        const passwordCorrect = await compare(password, user.password);

        if (!passwordCorrect) {
            throw new Error("Email or/and password incorrect!");
        }
        // Generate Token
    }
}
