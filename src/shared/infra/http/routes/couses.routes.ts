import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateCoursesController } from '@/modules/freelancerInformation/useCases/courses/createCourses/CreateCoursesController'

const coursesRoutes = Router()

const createCoursesController = new CreateCoursesController()


coursesRoutes.post(
    '/',
    ensureAuthenticated,
    createCoursesController.handle
)

export { coursesRoutes }