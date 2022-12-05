import { IUserService } from '@/data/protocols/services'
import { SaveUserDTO } from '@/data/protocols/dto'
import { IUserRepository } from '@/data/protocols/repositories'

import { User } from '@/domain/entities'
import { inject, singleton } from 'tsyringe'
import { AppError } from '@/shared/errors'
import { IStorageProvider } from '@/data/protocols/providers'

@singleton()
export class UserService implements IUserService {
	constructor(
		@inject('UserRepository')
		private readonly userRepository: IUserRepository,
		@inject('StorageProvider')
		private readonly storageProvider: IStorageProvider,
	) {}

	async create(data: SaveUserDTO): Promise<User> {
		const userAlreadyExists = await this.checkEmailIsUnique(
			data.email,
		)

		if (userAlreadyExists) {
			throw new AppError({
				statusCode: 400,
				message: 'Email already created.',
			})
		}

		return this.userRepository.save(data)
	}

	async avatarUpload(
		id: string,
		file: Express.Multer.File,
	): Promise<void> {
		const user = await this.userRepository.findById(id)

		await this.userRepository.save(
			Object.assign(user, {
				avatar_url: file.filename,
			}),
		)

		await this.storageProvider.save(file.filename, 'avatar')
	}

	private async checkEmailIsUnique(
		email: string,
	): Promise<User | null> {
		return this.userRepository.findByEmail(email)
	}
}
