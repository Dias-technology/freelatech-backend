import { User } from '@/domain/entities'
import { SaveUserDTO } from '@/data/protocols/dto'

export interface IUserRepository {
	save: (data: SaveUserDTO) => Promise<User>
	findByEmail: (email: string) => Promise<User>
}
