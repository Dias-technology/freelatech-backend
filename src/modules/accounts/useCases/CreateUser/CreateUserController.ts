import { Request, response, Response } from 'express'
import { container } from 'tsyringe'

import { CreateUserUseCase } from '@/modules/accounts/useCases/CreateUser/CreateUserUseCase'

class CreateUserController {
	async handle(
		request: Request,
		response: Response,
	): Promise<Response> {
		const { name, email, password, type, document } = request.body

		const createUserUseCase = container.resolve(CreateUserUseCase)
		await createUserUseCase.execute({
			name,
			email,
			password,
			type,
			document,
		})

		return response.status(201).send()
	}
}

export { CreateUserController }
