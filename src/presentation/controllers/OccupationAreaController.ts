import { Request, Response } from 'express'
import { makeOccupationService } from '@/presentation/helpers'

class OccupationAreaController {
	async save(
		request: Request,
		response: Response,
	): Promise<Response> {
		const data = request.body
		console.log('sdddd')
		const occupationArea = await makeOccupationService().create(data)

		return response.status(201).json({ occupationArea })
	}
}

export { OccupationAreaController }
