import { container } from 'tsyringe'
import { IUserService } from '@/data/protocols/services'
import { UserService } from '@/data/services'

import { IOccupationAreaService } from '@/data/protocols/services/OccupationAreaService'
import { OccupationAreaService } from '@/data/services/OccupationAreaService'

const makeUserService = (): IUserService => {
	return container.resolve(UserService)
}

const makeOccupationService = (): IOccupationAreaService => {
	return container.resolve(OccupationAreaService)
}

export { makeOccupationService, makeUserService }
