import 'reflect-metadata'
import 'dotenv/config'
import upload from '@/config/upload'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import * as Sentry from '@sentry/node'
import * as Tracing from '@sentry/tracing'

import { AppError } from '@/shared/errors/AppError'

import { router } from '@/shared/infra/http/routes'
import createConnection from '@/shared/infra/typeorm'

import rateLimiter from '@/shared/infra/http/middlewares/rateLimiter'
import '@/shared/container'

createConnection()
const app = express()

app.use(rateLimiter)

Sentry.init({
	dsn: process.env.SENTRY_DSN,
	integrations: [
		new Sentry.Integrations.Http({ tracing: true }),
		new Tracing.Integrations.Express({ app }),
	],
	tracesSampleRate: 1.0,
})

app.use(Sentry.Handlers.requestHandler())
app.use(Sentry.Handlers.tracingHandler())

app.use(express.json())

app.use('/avatar', express.static(`${upload.tmpFolder}/avatar`))

app.use(router)

app.use(Sentry.Handlers.errorHandler())

app.use(
	(
		error: Error,
		request: Request,
		response: Response,
		_: NextFunction,
	) => {
		if (error instanceof AppError) {
			return response.status(error.statusCode).json({
				message: error.message,
			})
		}

		return response.status(500).json({
			status: 'error',
			message: `Internal server error - ${error.message}`,
		})
	},
)

export { app }
