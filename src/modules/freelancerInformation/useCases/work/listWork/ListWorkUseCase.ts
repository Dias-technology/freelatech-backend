import { inject, injectable } from 'tsyringe'

import { IWorkRepository } from '@/modules/freelancerInformation/repositories/IWorkRepository'

import { Work } from '@/modules/freelancerInformation/infra/typeorm/entities/Work'

@injectable()
class ListWorkUseCase {

    constructor(
        @inject('WorkRepository')
        private WorkRepository: IWorkRepository
    ) {}

    async execute(user_id: string): Promise<Work[]>{
        return await this.WorkRepository.findJobsByUserID(user_id)
    }



}

export { ListWorkUseCase }