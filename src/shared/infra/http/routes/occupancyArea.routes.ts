import { Router } from 'express'
import { CreateAreaController } from '@/modules/freelancerInformation/useCases/createOccupancyArea/CreateAreaController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { ListAreasController } from '@/modules/freelancerInformation/useCases/listOccupancyArea/ListAreasController'
const occupancyRoutes = Router()

const createAreaController = new CreateAreaController()
const listAreasController = new ListAreasController()
occupancyRoutes.post(
	'/',
	ensureAuthenticated,
	createAreaController.handle,
)

occupancyRoutes.get(
	'/',
	ensureAuthenticated,
	listAreasController.handle
)

export { occupancyRoutes }
