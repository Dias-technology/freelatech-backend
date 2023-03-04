import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateNewProjectController } from '@/modules/projects/useCases/newProject/createNewProject/CreateNewProjectController'
import { ListProjectsController } from '@/modules/projects/useCases/newProject/listProjects/ListProjectsController'

const projectRoutes = Router()

const createNewProjectController = new CreateNewProjectController
const listProjectsController = new ListProjectsController

projectRoutes.post(
    '/',
    ensureAuthenticated,
    createNewProjectController.handle
)

projectRoutes.get(
    '/',
    ensureAuthenticated,
    listProjectsController.handle

)

export { projectRoutes }