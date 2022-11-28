import { Request, Response } from 'express'

export class UserController {
	async save(
		request: Request,
		response: Response,
	): Promise<Response> {
		const data = request.body

		return response.status(201).json({ data })
	}
}
