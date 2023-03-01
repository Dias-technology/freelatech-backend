import { getRepository, Repository } from 'typeorm'

import { IWorkRepository } from '@/modules/freelancerInformation/repositories/IWorkRepository'
import { Work } from '@/modules/freelancerInformation/infra/typeorm/entities/Work'
import { ICreateWorkDTO } from '@/modules/freelancerInformation/dto/ICreateWorkDTO'


class WorkRepository implements IWorkRepository {

    private readonly repository: Repository<Work>

    constructor(){
        this.repository = getRepository(Work)
    }

    async create(data: ICreateWorkDTO): Promise<void> {
        const work = this.repository.create(data)

        await this.repository.save(work)
    }

    async findJobsByUserID(user_id: string): Promise<Work[]>{
        return this.repository.find({user_id})
    }

}

export { WorkRepository }