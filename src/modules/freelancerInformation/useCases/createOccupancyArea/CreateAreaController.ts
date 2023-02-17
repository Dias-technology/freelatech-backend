import { Request, Response } from 'express'

import { container } from 'tsyringe'
import { CreateAreaUseCase } from './CreateAreaUseCase'

class CreateAreaController {
	async handle(
		request: Request,
		response: Response,
	): Promise<Response> {
		const { id: user_id } = request.user

		const { areas, areaFunction } = request.body

		const createAreaUseCase = container.resolve(CreateAreaUseCase)

		await createAreaUseCase.execute({
			areas,
			areaFunction,
			user_id,
		})

		return response.status(201).send()
	}
}

export { CreateAreaController }
