import { ICreateSkillsDTO } from '../dto/ICreateSkillsDTO'

export interface ISkillsRepository {
	create: (data: ICreateSkillsDTO) => Promise<void>
}
