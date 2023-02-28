
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateWorkController } from '@/modules/freelancerInformation/useCases/work/createWork/CreateWorkController'

const createWorkController = new CreateWorkController
const workRoutes = Router()

workRoutes.post(
    '/',
    ensureAuthenticated,
    createWorkController.handle
)

export { workRoutes }
