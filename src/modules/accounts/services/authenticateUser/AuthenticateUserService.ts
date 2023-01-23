import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
export class AuthenticateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute({ email, password }: IRequest): Promise<IResponse> {
        // User exists
        const user = await this.usersRepository.findByEmail(email);

        if (user === null) {
            throw new AppError("Email or/and password incorrect!");
        }
        // Password is correct
        const passwordCorrect = await compare(password, user.password);

        if (!passwordCorrect) {
            throw new AppError("Email or/and password incorrect!");
        }
        // Generate Token

        const token = sign({}, "fd64d198a44837c948f86563e719522f", {
            subject: user.id,
            expiresIn: "1d",
        });

        const authenticateReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        };

        return authenticateReturn;
    }
}
