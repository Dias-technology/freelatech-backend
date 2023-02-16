import { IUserRepository } from '@/modules/accounts/repositories/IUserRepository'

import { User } from '@/modules/accounts/infra/typeorm/entities/User'
import { ICreateUserDTO } from '@/modules/accounts/dto/ICreateUserDTO'
import { getRepository, Repository } from 'typeorm'

class UserRepository implements IUserRepository {
	private readonly repository: Repository<User>

	constructor() {
		this.repository = getRepository(User)
	}

	async create(data: ICreateUserDTO): Promise<void> {
		const user = this.repository.create(data)

		await this.repository.save(user)
	}

	async findById(id: string): Promise<User> {
		const user = this.repository.findOne({ id })

		return user
	}

	async findByEmail(email: string): Promise<User> {
		const user = this.repository.findOne({ email })

		return user
	}
}

export { UserRepository }
