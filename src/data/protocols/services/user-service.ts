import { SaveUserDTO } from '@/data/protocols/dto'
import { User } from '@/domain/entities'

export interface IUserService {
	create: (data: SaveUserDTO) => Promise<User>
	checkEmailIsUnique: (email: string) => Promise<User | null>
}
