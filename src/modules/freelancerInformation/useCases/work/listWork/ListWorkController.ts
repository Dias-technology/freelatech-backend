import { Request, Response } from 'express'

import { container } from 'tsyringe'

import { ListWorkUseCase } from './ListWorkUseCase'

class ListWorkController {
    async handle( request: Request, response: Response): Promise<Response> {
        const { user_id} = request.query

        const listWorkUseCase = container.resolve(ListWorkUseCase)

        const listWorks = await listWorkUseCase.execute(user_id as string)

         
        return response.status(200).json(listWorks)
    }

}

export { ListWorkController }