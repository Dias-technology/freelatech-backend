import { Request, Response } from 'express'

import { container } from 'tsyringe'

import { DeleteWorkUseCase } from './DeleteWorkUseCase'

class DeleteWorkController {
    async handle(request: Request,response: Response): Promise<Response> {

        const { id } = request.params
        
        const deleteWorkUseCase = container.resolve(DeleteWorkUseCase)

        await deleteWorkUseCase.execute(id as string)

        return response.status(200).send()
    }
}

export { DeleteWorkController }