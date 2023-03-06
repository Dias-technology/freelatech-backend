import { ICreateSkillsDTO } from '@/modules/projects/dto/ICreateSkillsDTO'
import { Skills } from '@/modules/projects/infra/entities/Skills'

export interface ISkillsRepository {
	create: (data: ICreateSkillsDTO) => Promise<void>
	findSkillsByProject: (project_id: string) => Promise<Skills[]>
}
