import { Request, Response } from 'express'

import { container } from 'tsyringe'

import { DeleteAreaUseCase } from '@/modules/freelancerInformation/useCases/deleteOccupancyArea/DeleteAreaUseCase'

class DeleteAreaController {

    async handle(request: Request, response: Response): Promise<Response>{
        const {id} = request.params

        const deleteAreaUseCase = container.resolve(DeleteAreaUseCase)

        await deleteAreaUseCase.execute( id as string)

        return response.status(200).send()
    }

}

export { DeleteAreaController }