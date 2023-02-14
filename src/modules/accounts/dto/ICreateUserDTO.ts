interface ICreateUserDTO {
	name: string

	email: string

	password: string

	type: string

	document: string

	id?: string

	avatar?: string
}

export { ICreateUserDTO }
