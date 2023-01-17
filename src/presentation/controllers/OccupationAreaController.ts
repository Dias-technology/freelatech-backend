import { Request, Response } from 'express'
import { makeOccupationService } from '@/presentation/helpers'

class OccupationAreaController {
	async save(
		request: Request,
		response: Response,
	): Promise<Response> {
		const { items } = request.body

		const occupationArea = await makeOccupationService().create(items)

		return response.status(201).json({ occupationArea })
	}
}

export { OccupationAreaController }
