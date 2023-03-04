import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateNewProjectUseCase } from './CreateNewProjectUseCase'


class CreateNewProjectController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { id: owner_id } = request.user

        const data = request.body
        
        const createNewProjectUseCase = container.resolve(CreateNewProjectUseCase)
        const datas = Object.assign(data, { owner_id })

        await createNewProjectUseCase.execute(datas)
        
        return response.status(201).send()
    }

}

export { CreateNewProjectController }
