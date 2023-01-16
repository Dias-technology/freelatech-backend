import { container, Lifecycle } from 'tsyringe'

import {
	IOccupationAreaRepository,
	IUserRepository,
} from '@/data/protocols/repositories'
import {
	UserRepository,
	OccupationAreaRepository,
} from '@/shared/infra/database/repositories'
import { UserService, OccupationAreaService } from '@/data/services'
import { IStorageProvider } from '@/data/protocols/providers'
import { LocalStorageProvider } from '@/shared/providers'

// DATABASE
container.registerSingleton<IUserRepository>(
	'UserRepository',
	UserRepository,
)

container.registerSingleton<IOccupationAreaRepository>(
	'OccupationAreaRepository',
	OccupationAreaRepository,
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

container.register(
	'OccupationAreaService',
	{ useClass: OccupationAreaService },
	{ lifecycle: Lifecycle.Singleton },
)
