import auth from '@/config/auth'
import { IUserRepository } from '@/modules/accounts/repositories/IUserRepository'
import { IUsersTokensRepository } from '@/modules/accounts/repositories/IUsersTokensRepository'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'

import { IDateProvider } from '@/shared/container/providers/DataProvider/IDataProvider'
import { AppError } from '@/shared/errors/AppError'

interface IRequest {
    email: string
    password: string
}

interface IResponse {
    user: {
        name: string
        email: string
    }

    token: string
    refresh_token: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private readonly usersRepository: IUserRepository,

        @inject("UsersTokensRepository")
        private readonly usersTokensRepository: IUsersTokensRepository,

        @inject("DayjsDateProvider")
        private readonly dateProvider: IDateProvider
    ) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email)
        const {
            expires_in_token,
            secret_refresh_token,
            secret_token,
            expires_in_refresh_token,
            expires_refresh_token_days,
        } = auth

        if (!user) {
            throw new AppError({
                statusCode: 401,
                message: 'Email or password incorrect.',
            })
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new AppError({
                statusCode: 401,
                message: 'Email or password incorrect.',
            })
        }

        const token = sign({}, secret_token, {
            subject: user.id,
            expiresIn: expires_in_token,
        })

        const refresh_token = sign({ email }, secret_refresh_token, {
            subject: user.id,
            expiresIn: expires_in_refresh_token,
        })

        const refresh_token_expires_date = this.dateProvider.addDays(
            expires_refresh_token_days
        )

        await this.usersTokensRepository.create({
            expires_date: refresh_token_expires_date,
            refresh_token,
            user_id: user.id,
        })

        return {
            user: {
                name: user.name,
                email: user.email,
            },
            token,
            refresh_token,
        }
    }
}

export { AuthenticateUserUseCase }
