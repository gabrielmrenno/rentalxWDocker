import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "../../../errors/AppError";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    // Take token from request
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    // Token model: Bearer ashdjaisodjaojdoasj (token) in the authorization component on header
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const token: string = authHeader.split(" ").pop()!;

    // verify if token is valid - if it's not valid, it's throw a error
    try {
        const payload = verify(
            token,
            "fd64d198a44837c948f86563e719522f"
        ) as IPayload;

        const userId = payload.sub;

        // verify if user exists on db
        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(userId);

        if (!user) {
            throw new AppError("User doesn't exist", 401);
        }

        return next();
    } catch (error) {
        throw new AppError("Invalid token", 401);
    }
}
