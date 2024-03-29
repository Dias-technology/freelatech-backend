import { ICreateUserTokenDTO } from '@/modules/accounts/dto/ICreateUserTokenDTO'
import { IUsersTokensRepository } from '@/modules/accounts/repositories/IUsersTokensRepository'
import { getRepository, Repository } from 'typeorm'
import { textChangeRangeIsUnchanged } from 'typescript'

import { UserTokens } from '@/modules/accounts/infra/typeorm/entities/UserTokens'

class UsersTokensRepository implements IUsersTokensRepository {
    private readonly repository: Repository<UserTokens>

    constructor() {
        this.repository = getRepository(UserTokens)
    }

    async create({ expires_date, refresh_token, user_id }: ICreateUserTokenDTO):
        Promise<UserTokens> {

        const userTokens = this.repository.create({
            expires_date,
            refresh_token,
            user_id,
        })

        await this.repository.save(userTokens)

        return userTokens
    }
    async findByUserIdAndRefreshToken(user_id: string, refresh_token: string):
        Promise<UserTokens> {

        const usersTokens = await this.repository.findOne({
            user_id,
            refresh_token,
        })

        return usersTokens
    }
    async deleteById(id: string): Promise<void> {
        await this.repository.delete({ id })
    }

    async findByRefreshToken(refresh_token: string): Promise<UserTokens> {
        const userToken = await this.repository.findOne({ refresh_token })

        return userToken
    }
}

export { UsersTokensRepository }
