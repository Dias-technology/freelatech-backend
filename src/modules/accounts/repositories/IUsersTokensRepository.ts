import { ICreateUserTokenDTO } from '@/modules/accounts/dto/ICreateUserTokenDTO'
import { UserTokens } from '@/modules/accounts/infra/typeorm/entities/UserTokens'

interface IUsersTokensRepository {
    create({ expires_date, refresh_token, user_id }: ICreateUserTokenDTO):
        Promise<UserTokens>

    findByUserIdAndRefreshToken(user_id: string, refresh_token: string):
        Promise<UserTokens>

    deleteById(id: string): Promise<void>

    findByRefreshToken(refresh_token: string): Promise<UserTokens>
}

export { IUsersTokensRepository }
