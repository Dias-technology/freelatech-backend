import { Request, Response } from 'express'

import { container } from 'tsyringe'

import { CreateCoursesUseCase } from '@/modules/freelancerInformation/useCases/courses/createCourses/CreateCoursesUseCase'

class CreateCoursesController {

    async handle( request: Request, response: Response): Promise<Response> {

        const { id: user_id } = request.user

        const { name, institute, status, category} = request.body

        const createCoursesUseCase = container.resolve(CreateCoursesUseCase)

        await createCoursesUseCase.execute({
            name, institute, status, category, user_id
        })

        return response.status(201).send()
    }

}

export { CreateCoursesController }