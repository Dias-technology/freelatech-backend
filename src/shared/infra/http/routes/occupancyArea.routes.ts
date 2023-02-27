import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateAreaController } from '@/modules/freelancerInformation/useCases/occupancyArea/createOccupancyArea/CreateAreaController'
import { ListAreasController } from '@/modules/freelancerInformation/useCases/occupancyArea/listOccupancyArea/ListAreasController'
import { DeleteAreaController } from '@/modules/freelancerInformation/useCases/occupancyArea/deleteOccupancyArea/DeleteAreaController'

const occupancyRoutes = Router()

const createAreaController = new CreateAreaController()
const listAreasController = new ListAreasController()
const deleteAreaController = new DeleteAreaController()


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

occupancyRoutes.delete(
	'/:id',
	ensureAuthenticated,
	deleteAreaController.handle
)

export { occupancyRoutes }
