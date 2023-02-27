import { Router } from 'express'
import { authenticateRoutes } from './authenticate.routes'
import { occupancyRoutes } from './occupancyArea.routes'
import { coursesRoutes } from './courses.routes'

import { userRoutes } from './users.routes'

const router = Router()

router.use(authenticateRoutes)
router.use('/users', userRoutes)
router.use('/occupancy_area', occupancyRoutes)
router.use('/courses', coursesRoutes)


export { router }
