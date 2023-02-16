import { hash } from 'bcrypt'
import { inject, injectable } from 'tsyringe'

import { IUserRepository } from '@/modules/accounts/repositories/IUserRepository'
import { ICreateUserDTO } from '../../dto/ICreateUserDTO'

import { AppError } from '@/shared/errors/AppError'

@injectable()
class CreateUserUseCase {
	constructor(
		@inject('UserRepository')
		private userRepository: IUserRepository,
	) {}

	async execute({
		name,
		email,
		password,
		type,
		document,
	}: ICreateUserDTO): Promise<void> {
		const passwordHash = await hash(password, 8)
		const userAlreadyExists = await this.userRepository.findByEmail(
			email,
		)

		if (userAlreadyExists) {
			throw new AppError({
				statusCode: 400,
				message: 'User already exists.',
			})
		}

		await this.userRepository.create({
			name,
			email,
			password: passwordHash,
			type,
			document,
		})
	}
}

export { CreateUserUseCase }
