import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListSkillsUseCase } from './ListSkillsUseCase'

class ListSkillsController{
    async handle(request: Request, response: Response): Promise<Response> {
        const {project_id} = request.query

        const listSkillsUseCase = container.resolve(ListSkillsUseCase)

        const listSkills = await listSkillsUseCase.execute(project_id as string)

        return response.status(200).json(listSkills)
    }
}

export { ListSkillsController }