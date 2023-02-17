import { Router } from 'express'
import { authenticateRoutes } from './authenticate.routes'
import { occupancyRoutes } from './occupancyArea.routes'

import { userRoutes } from './users.routes'

const router = Router()

router.use('/users', userRoutes)
router.use('/occupancy_area', occupancyRoutes)
router.use(authenticateRoutes)

export { router }
