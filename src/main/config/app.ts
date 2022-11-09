import 'express-async-errors'

import express, { Express } from 'express'
import setupRoutes from '@/main/config/routes'
import { bodyParser, celebrateErrors } from '@/main/middlewares'

export const setupApp = (): Express => {
	const app = express()

	app.use(bodyParser)
	app.use(celebrateErrors)
	setupRoutes(app)

	return app
}
