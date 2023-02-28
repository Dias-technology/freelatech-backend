
interface ICreateWorkDTO {
    id?: string

    business: string

    company: string

    start_work: Date

    end_work?: Date

    user_id: string
}

export { ICreateWorkDTO }