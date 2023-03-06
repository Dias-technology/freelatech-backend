import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateSkillsController } from '@/modules/projects/useCases/skills/createSkills/CreateSkillsController'
import { ListSkillsController } from '@/modules/projects/useCases/skills/listSkills/ListSkillsController'

const skillsRoutes = Router()

const createSkillsController = new CreateSkillsController()
const listSkillsController = new ListSkillsController()

skillsRoutes.post(
	'/',
	ensureAuthenticated,
	createSkillsController.handle,
)

skillsRoutes.get(
	'/',
	ensureAuthenticated,
	listSkillsController.handle
)


export { skillsRoutes }
