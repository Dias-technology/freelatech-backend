import { Request, Response } from 'express'

import { container } from 'tsyringe'

import { DeleteCoursesUseCase } from '@/modules/freelancerInformation/useCases/courses/deleteCourses/DeleteCoursesUseCase'

class DeleteCoursesController {
    async handle(request: Request,response: Response): Promise<Response> {
		const { id } = request.params

        const deleteCoursesUseCase = container.resolve(DeleteCoursesUseCase)

        await deleteCoursesUseCase.execute(id)
        
        return response.status(200).send()
    }


}

export { DeleteCoursesController }