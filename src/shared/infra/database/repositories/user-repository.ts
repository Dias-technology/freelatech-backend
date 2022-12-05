import { SaveUserDTO } from '@/data/protocols/dto'
import { IUserRepository } from '@/data/protocols/repositories'
import { User } from '@/domain/entities'
import { AppError } from '@/shared/errors'
import { getRepository, Repository } from 'typeorm'

export class UserRepository implements IUserRepository {
	private readonly repository: Repository<User>

	constructor() {
		this.repository = getRepository(User)
	}

	async save(data: SaveUserDTO): Promise<User> {
		const user = this.repository.create(data)

		await this.repository.save(user)

		return user
	}

	async findById(id: string): Promise<User> {
		const userAlreadyExists = await this.repository.findOne(id)

		if (!userAlreadyExists) {
			throw new AppError({
				statusCode: 404,
				message: "User doesn't exists.",
			})
		}

		return userAlreadyExists
	}

	async findByEmail(email: string): Promise<User> {
		return this.repository.findOne({ email })
	}
}
