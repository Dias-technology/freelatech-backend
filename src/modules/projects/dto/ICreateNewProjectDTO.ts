
interface ICreateNewProjectDTO {
    id?: string

    title: string

    description: string

    file?: string

    status: boolean 

    budget: string

    occupancy: string

    sub_occupancy: string

    start_project:Date

    end_project: Date

    worker_id?: string

    owner_id: string
}

export { ICreateNewProjectDTO }