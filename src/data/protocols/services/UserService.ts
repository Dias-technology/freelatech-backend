import { SaveUserDTO } from '@/data/protocols/dto'
import { User } from '@/domain/entities'

export interface IUserService {
	create: (data: SaveUserDTO) => Promise<User>
	avatarUpload: (
		id: string,
		file: Express.Multer.File,
	) => Promise<void>
}
