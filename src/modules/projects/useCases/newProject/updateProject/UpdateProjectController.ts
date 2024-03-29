import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { UpdateProjectUseCase } from './UpdateProjectUseCase'

class UpdateProjectController {
    async handleStatus(request: Request, response: Response): Promise<Response> {
        const {id} = request.params
        const {status} = request.body

        const updateProjectUseCase = container.resolve(UpdateProjectUseCase)

        await updateProjectUseCase.executeStatus({ id, status})

        return response.status(204).send()
    }

    async handleWorker(request: Request, response: Response): Promise<Response> {
        const {id} = request.params
        const {worker_id} = request.body

        const updateProjectUseCase = container.resolve(UpdateProjectUseCase)

        await updateProjectUseCase.executeWorker({ id, worker_id })
        
        return response.status(204).send()
    }
}

export { UpdateProjectController }