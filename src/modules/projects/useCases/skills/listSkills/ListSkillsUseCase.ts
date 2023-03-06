import { inject, injectable } from 'tsyringe'

import { ISkillsRepository } from '@/modules/projects/repositories/ISkillsRepository'
import { Skills } from '@/modules/projects/infra/entities/Skills'

@injectable()
class ListSkillsUseCase {

    constructor(
		@inject('SkillsRepository')
		private SkillsRepository: ISkillsRepository,
	) {}

    async execute(project_id: string): Promise<Skills[]>{
        return await this.SkillsRepository.findSkillsByProject(project_id)
    }

}

export { ListSkillsUseCase }