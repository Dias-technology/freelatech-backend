import { getRepository, Repository } from 'typeorm'

import { ICoursesRepository } from '@/modules/freelancerInformation/repositories/ICoursesRepository'
import { Courses } from '@/modules/freelancerInformation/infra/typeorm/entities/Courses'
import { IcreateCoursesDTO } from '@/modules/freelancerInformation/dto/ICreateCoursesDTO'


class CoursesRepository implements ICoursesRepository {

    private readonly repository: Repository<Courses>

    constructor() {
        this.repository = getRepository(Courses)
    }

    async create(data: IcreateCoursesDTO): Promise<void> {
        const courses = this.repository.create(data)

        await this.repository.save(courses)
    }

    async findByUserID(user_id: string): Promise<Courses[]> {
		return this.repository.find({ user_id })
	}

}

export { CoursesRepository }