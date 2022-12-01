import { container, Lifecycle } from 'tsyringe'

import { IUserRepository } from '@/data/protocols/repositories'
import { UserRepository } from '@/shared/infra/database/repositories'
import { UserService } from '@/data/services'

// DATABASE
container.registerSingleton<IUserRepository>(
	'UserRepository',
	UserRepository,
)

// SERVICES
container.register(
	'UserService',
	{ useClass: UserService },
	{ lifecycle: Lifecycle.Singleton },
)
