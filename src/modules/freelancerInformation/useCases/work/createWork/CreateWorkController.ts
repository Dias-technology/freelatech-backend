import { Request, Response } from 'express'

import { container } from 'tsyringe'

import { CreateWorkUseCase } from '@/modules/freelancerInformation/useCases/work/createWork/CreateWorkUseCase'

class CreateWorkController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id: user_id } = request.user

        const { business, company, start_work, end_work} = request.body

        const createWorkUseCase = container.resolve(CreateWorkUseCase)
        
        await createWorkUseCase.execute({
            business, company, start_work, end_work, user_id
        })
        
        return response.status(201).send()
    }

}

export { CreateWorkController }