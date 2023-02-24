import { Request, Response } from 'express'

import { container } from 'tsyringe'

import { ListAreasUseCase } from '@/modules/freelancerInformation/useCases/listOccupancyArea/ListAreasUseCase'

class ListAreasController {
    async handle(request: Request, response: Response): Promise<Response>{
        const {user_id} = request.query

        const listAreasUseCase = container.resolve(ListAreasUseCase)

        const areas = await listAreasUseCase.execute(user_id as string)

        return response.status(200).json(areas)
    }

}

export { ListAreasController }