import { container } from 'tsyringe'

import { IUserRepository } from '@/modules/accounts/repositories/IUserRepository'

import { UserRepository } from '@/modules/accounts/infra/typeorm/repositories/UserRepository'
import { IUsersTokensRepository } from '@/modules/accounts/repositories/IUsersTokensRepository'
import { UsersTokensRepository } from '@/modules/accounts/infra/typeorm/repositories/UserTokensRepository'

import '@/shared/container/providers'

// DATABASE
container.registerSingleton<IUserRepository>(
	'UserRepository',
	UserRepository,
)

container.registerSingleton<IUsersTokensRepository>(
	'UsersTokensRepository',
	UsersTokensRepository,
)
