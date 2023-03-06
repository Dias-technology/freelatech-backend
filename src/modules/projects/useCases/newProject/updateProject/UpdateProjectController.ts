import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { UpdateProjectUseCase } from './UpdateProjectUseCase'

class UpdateProjectController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.params
        const {status} = request.body

        const updateProjectUseCase = container.resolve(UpdateProjectUseCase)

        await updateProjectUseCase.execute({ id, status})

        return response.status(204).send()
    }
}

export { UpdateProjectController }