import { NextFunction, Request, Response } from 'express'
import { RateLimiterRedis } from 'rate-limiter-flexible'
import { createClient } from 'redis'

import { AppError } from '@/shared/errors/AppError'

const redisClient = createClient({
	legacyMode: true,
	socket: {
		host: process.env.REDIS_HOST,
		port: Number(process.env.REDIS_PORT),
		sessionTimeout: 20,
	},
})

const limiter = new RateLimiterRedis({
	storeClient: redisClient,
	keyPrefix: 'rateLimiter',
	points: 10000000,
	duration: 1,
})

export default async function rateLimiter(
	request: Request,
	_: Response,
	next: NextFunction,
): Promise<void> {
	try {
		await redisClient.connect()

		await limiter.consume(request.ip)

		return next()
	} catch (e) {
		console.log(e)
		throw new AppError({
			statusCode: 429,
			message: 'Too many requests',
		})
	} finally {
		await redisClient.disconnect()
	}
}
