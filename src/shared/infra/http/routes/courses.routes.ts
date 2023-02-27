import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateCoursesController } from '@/modules/freelancerInformation/useCases/courses/createCourses/CreateCoursesController'
import { ListCoursesController } from '@/modules/freelancerInformation/useCases/courses/listCourses/ListCoursesController'

const coursesRoutes = Router()

const createCoursesController = new CreateCoursesController()
const listCoursesController = new ListCoursesController()


coursesRoutes.post(
    '/',
    ensureAuthenticated,
    createCoursesController.handle
)

coursesRoutes.get(
    '/',
    ensureAuthenticated,
    listCoursesController.handle
)

export { coursesRoutes }