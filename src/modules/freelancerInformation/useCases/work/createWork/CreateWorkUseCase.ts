import { inject, injectable } from 'tsyringe'

import { IWorkRepository } from '@/modules/freelancerInformation/repositories/IWorkRepository'
import { ICreateWorkDTO } from '@/modules/freelancerInformation/dto/ICreateWorkDTO'


@injectable()
class CreateWorkUseCase {
    constructor(
        @inject('WorkRepository')
        private WorkRepository: IWorkRepository
    ){}

    async execute({
        business, company, start_work, end_work, user_id
    }:ICreateWorkDTO): Promise<void>{
        
        await this.WorkRepository.create({
            business, company, start_work, end_work, user_id
        })
    }
}

export { CreateWorkUseCase }