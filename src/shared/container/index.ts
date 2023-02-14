import { container } from 'tsyringe'

import { IUserRepository } from '@/modules/accounts/repositories/IUserRepository'

import { UserRepository } from '@/modules/accounts/infra/typeorm/repositories/UserRepository'

// DATABASE
container.registerSingleton<IUserRepository>(
	'UserRepository',
	UserRepository,
)
