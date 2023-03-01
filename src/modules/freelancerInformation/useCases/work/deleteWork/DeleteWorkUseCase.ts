import { inject, injectable } from 'tsyringe'

import { IWorkRepository } from '@/modules/freelancerInformation/repositories/IWorkRepository'

@injectable()
class DeleteWorkUseCase {
    constructor(
        @inject('WorkRepository')
        private WorkRepository: IWorkRepository
    ){}

    async execute(id:string): Promise<void>{
        return await this.WorkRepository.deleteJobByID(id)
    }

}

export { DeleteWorkUseCase }