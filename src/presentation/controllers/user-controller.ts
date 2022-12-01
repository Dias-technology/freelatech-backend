import { Request, Response } from 'express'
import { makeUserService } from '@/presentation/helpers'

export class UserController {
	async save(
		request: Request,
		response: Response,
	): Promise<Response> {
		const data = request.body

		const user = await makeUserService().create(data)

		return response.status(201).json({ user })
	}
}
