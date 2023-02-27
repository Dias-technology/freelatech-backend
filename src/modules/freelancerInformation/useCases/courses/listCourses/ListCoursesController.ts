import { Request, Response } from 'express'

import { container } from 'tsyringe'

import { ListCoursesUseCase } from '@/modules/freelancerInformation/useCases/courses/listCourses/ListCoursesUseCase'

class ListCoursesController{
    async handle( request: Request, response: Response): Promise<Response> {
        const {user_id} = request.query

        const listCoursesUseCase = container.resolve(ListCoursesUseCase)

        const listCourses = await listCoursesUseCase.execute(user_id as string)

        return response.status(200).json(listCourses)
    }

}

export { ListCoursesController }