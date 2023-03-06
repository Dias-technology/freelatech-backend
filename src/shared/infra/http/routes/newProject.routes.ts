import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateNewProjectController } from '@/modules/projects/useCases/newProject/createNewProject/CreateNewProjectController'
import { ListProjectsController } from '@/modules/projects/useCases/newProject/listProjects/ListProjectsController'
import { UpdateProjectController } from '@/modules/projects/useCases/newProject/updateProject/UpdateProjectController'

const projectRoutes = Router()

const createNewProjectController = new CreateNewProjectController()
const listProjectsController = new ListProjectsController()
const updateProjectController = new UpdateProjectController()

projectRoutes.post(
	'/',
	ensureAuthenticated,
	createNewProjectController.handle,
)

projectRoutes.get(
	'/',
	ensureAuthenticated,
	listProjectsController.handle,
)

projectRoutes.get(
	'/:id',
	ensureAuthenticated,
	listProjectsController.handleOne,
)

projectRoutes.patch(
	'/status/:id',
	ensureAuthenticated,
	updateProjectController.handleStatus
)

projectRoutes.patch(
	'/worker/:id',
	ensureAuthenticated,
	updateProjectController.handleWorker
)

export { projectRoutes }
