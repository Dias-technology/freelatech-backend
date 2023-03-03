import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateNewProjectController } from '@/modules/projects/useCases/newProject/createNewProject/CreateNewProjectController'

const projectRoutes = Router()

const createNewProjectController = new CreateNewProjectController

projectRoutes.post(
    '/',
    ensureAuthenticated,
    createNewProjectController.handle
)

export { projectRoutes }