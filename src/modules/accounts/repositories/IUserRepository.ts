import { User } from '@/modules/accounts/infra/typeorm/entities/User'
import { ICreateUserDTO } from '../dto/ICreateUserDTO'

export interface IUserRepository {
	create: (data: ICreateUserDTO) => Promise<void>

	findById: (id: string) => Promise<User>

	findByEmail: (email: string) => Promise<User>
}
