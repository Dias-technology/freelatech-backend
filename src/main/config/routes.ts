import { isCelebrateError } from 'celebrate'
import {
	Express,
	Router,
	Request,
	Response,
	NextFunction,
} from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'
import { customErrors } from '@/main/middlewares'

export default (app: Express): void => {
	const router = Router()
	app.use('/api', router)

	readdirSync(
		join(process.cwd(), 'src/shared/infra/http/routes'),
	).forEach(async (file) => {
		console.log(file)
		if (!file.endsWith('.map')) {
			;(await import(`@/shared/infra/http/routes/${file}`)).default(
				router,
			)
		}
	})

	app.use(
		(
			error: Error,
			__: Request,
			response: Response,
			_: NextFunction,
		) => {
			if (!isCelebrateError(error)) {
				return response.status(500).json({
					error: 'INTERNAL_SERVER_ERROR',
					message: 'Internal server error',
					stack: process.env.DEBUG ? error.stack : null,
				})
			}

			return response.status(400).json({
				...customErrors(error),
			})
		},
	)
}
