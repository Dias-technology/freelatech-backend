import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateSkillsController } from '@/modules/projects/useCases/skills/createSkills/CreateSkillsController'

const skillsRoutes = Router()

const createSkillsController = new CreateSkillsController()

skillsRoutes.post(
	'/',
	ensureAuthenticated,
	createSkillsController.handle,
)

export { skillsRoutes }
