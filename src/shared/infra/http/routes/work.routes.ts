
import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateWorkController } from '@/modules/freelancerInformation/useCases/work/createWork/CreateWorkController'

import { ListWorkController } from '@/modules/freelancerInformation/useCases/work/listWork/ListWorkController'
const createWorkController = new CreateWorkController
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

export { workRoutes }
