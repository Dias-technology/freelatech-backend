import { container } from 'tsyringe'

import { IUserRepository } from '@/modules/accounts/repositories/IUserRepository'
import { UserRepository } from '@/modules/accounts/infra/typeorm/repositories/UserRepository'

import { IUsersTokensRepository } from '@/modules/accounts/repositories/IUsersTokensRepository'
import { UsersTokensRepository } from '@/modules/accounts/infra/typeorm/repositories/UserTokensRepository'

import { IOccupancyAreaRepository } from '@/modules/freelancerInformation/repositories/IOccupancyAreaRepository'
import { OccupancyAreaRepository } from '@/modules/freelancerInformation/infra/typeorm/repositories/OccupancyAreaRepository'

import { ICoursesRepository } from '@/modules//freelancerInformation/repositories/ICoursesRepository'
import { CoursesRepository } from '@/modules/freelancerInformation/infra/typeorm/repositories/CoursesRepository'

import { IWorkRepository } from '@/modules/freelancerInformation/repositories/IWorkRepository'
import { WorkRepository } from '@/modules/freelancerInformation/infra/typeorm/repositories/WorkRepository'

import { ISkillsRepository } from '@/modules/projects/repositories/ISkillsRepository'
import { SkillsRepository } from '@/modules/projects/infra/repositories/SkillsRepository'

import { INewProjectRepository } from '@/modules/projects/repositories/INewProjectRepository'
import { NewProjectRepository } from '@/modules/projects/infra/repositories/NewProjectRepository'

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

container.registerSingleton<IOccupancyAreaRepository>(
	'OccupancyAreaRepository',
	OccupancyAreaRepository,
)

container.registerSingleton<ICoursesRepository>(
	'CoursesRepository',
	CoursesRepository,
)

container.registerSingleton<IWorkRepository>(
	'WorkRepository',
	WorkRepository,
)

container.registerSingleton<ISkillsRepository>(
	'SkillsRepository',
	SkillsRepository,
)

container.registerSingleton<INewProjectRepository>(
	'NewProjectRepository',
	NewProjectRepository
)