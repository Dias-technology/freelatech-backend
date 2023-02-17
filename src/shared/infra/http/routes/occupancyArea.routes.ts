import { Router } from 'express'
import { CreateAreaController } from '@/modules/freelancerInformation/useCases/createOccupancyArea/CreateAreaController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
const occupancyRoutes = Router()

const createAreaController = new CreateAreaController()
occupancyRoutes.post(
	'/',
	ensureAuthenticated,
	createAreaController.handle,
)

export { occupancyRoutes }
