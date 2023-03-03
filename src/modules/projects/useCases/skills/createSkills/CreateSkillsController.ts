import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateSkillsUseCase } from './CreateSkillsUseCase'

class CreateSkillsController {
	async handle(
		request: Request,
		response: Response,
	): Promise<Response> {
		const { skill, project_id } = request.body

		const createSkillsUseCase = container.resolve(CreateSkillsUseCase)

		await createSkillsUseCase.execute({ skill, project_id })

		return response.status(201).send()
	}
}

export { CreateSkillsController }
