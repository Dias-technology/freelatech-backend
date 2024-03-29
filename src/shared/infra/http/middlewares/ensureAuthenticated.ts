import auth from '@/config/auth'
import { UserRepository } from '@/modules/accounts/infra/typeorm/repositories/UserRepository'
import { UsersTokensRepository } from '@/modules/accounts/infra/typeorm/repositories/UserTokensRepository'
import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"

import { AppError } from "@/shared/errors/AppError"

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError({
            statusCode: 401,
            message: 'Invalid token',
        })
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, auth.secret_token) as IPayload;

        request.user = {
            id: user_id,
        };

        next();
    } catch {
        throw new AppError({
            statusCode: 401,
            message: 'Invalid token',
        })
    }
}

