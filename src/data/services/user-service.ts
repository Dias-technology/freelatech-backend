import { IUserService } from '@/data/protocols/services'
import { SaveUserDTO } from '@/data/protocols/dto'
import { IUserRepository } from '@/data/protocols/repositories'

import { User } from '@/domain/entities'
import { inject, singleton } from 'tsyringe'
import { AppError } from '@/shared/errors'

@singleton()
export class UserService implements IUserService {
	constructor(
		@inject('UserRepository')
		private readonly userRepository: IUserRepository,
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

	async checkEmailIsUnique(email: string): Promise<User | null> {
		return this.userRepository.findByEmail(email)
	}
}
