import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CreateCoursesController } from '@/modules/freelancerInformation/useCases/courses/createCourses/CreateCoursesController'
import { ListCoursesController } from '@/modules/freelancerInformation/useCases/courses/listCourses/ListCoursesController'
import { DeleteCoursesController } from '@/modules/freelancerInformation/useCases/courses/deleteCourses/DeleteCoursesController'
const coursesRoutes = Router()

const createCoursesController = new CreateCoursesController()
const listCoursesController = new ListCoursesController()
const deleteCoursesController = new DeleteCoursesController()


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

coursesRoutes.delete(
    '/:id',
    ensureAuthenticated,
    deleteCoursesController.handle
    
)

export { coursesRoutes }