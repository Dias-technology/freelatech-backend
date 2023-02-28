import { inject, injectable } from 'tsyringe'

import { ICoursesRepository } from '@/modules/freelancerInformation/repositories/ICoursesRepository'
 
@injectable()
class DeleteCoursesUseCase {

    constructor(
        @inject('CoursesRepository')
        private CoursesRepository: ICoursesRepository
    ){}

    async execute(id: string): Promise<void>{
        return await this.CoursesRepository.deleteById(id)
    }
}

export { DeleteCoursesUseCase }