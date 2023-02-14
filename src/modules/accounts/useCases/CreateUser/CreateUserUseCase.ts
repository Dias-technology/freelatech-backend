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
		const userAlreadyExists = await this.userRepository.findByEmail(
			email,
		)
		console.log(userAlreadyExists)
		if (userAlreadyExists) {
			throw new AppError({
				statusCode: 400,
				message: 'User already exists.',
			})
		}

		await this.userRepository.create({
			name,
			email,
			password,
			type,
			document,
		})
	}
}

export { CreateUserUseCase }
