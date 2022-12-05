import { container, Lifecycle } from 'tsyringe'

import { IUserRepository } from '@/data/protocols/repositories'
import { UserRepository } from '@/shared/infra/database/repositories'
import { UserService } from '@/data/services'
import { IStorageProvider } from '@/data/protocols/providers'
import { LocalStorageProvider } from '@/shared/providers'

// DATABASE
container.registerSingleton<IUserRepository>(
	'UserRepository',
	UserRepository,
)

// PROVIDERS
container.registerSingleton<IStorageProvider>(
	'StorageProvider',
	LocalStorageProvider,
)

// SERVICES
container.register(
	'UserService',
	{ useClass: UserService },
	{ lifecycle: Lifecycle.Singleton },
)
