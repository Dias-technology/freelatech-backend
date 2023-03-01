
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateWorkController } from '@/modules/freelancerInformation/useCases/work/createWork/CreateWorkController'
import { ListWorkController } from '@/modules/freelancerInformation/useCases/work/listWork/ListWorkController'
import { DeleteWorkController } from '@/modules/freelancerInformation/useCases/work/deleteWork/DeleteWorkController'

const createWorkController = new CreateWorkController
const deleteWorkController = new DeleteWorkController
const listWorkController = new ListWorkController

const workRoutes = Router()

workRoutes.post(
    '/',
    ensureAuthenticated,
    createWorkController.handle
)

workRoutes.get(
    '/',
    ensureAuthenticated,
    listWorkController.handle
)

workRoutes.delete(
    '/:id',
    ensureAuthenticated,
    deleteWorkController.handle
)

export { workRoutes }
