import { Router } from 'express'
import { celebrate, Joi } from 'celebrate'

import { OccupationAreaController } from '@/presentation/controllers'

const occupationAreaController = new OccupationAreaController()

export default (router: Router): void => {
	router.post(
		'/user/occupationarea',
		celebrate({
			body: {
				items: Joi.array().items({
					area: Joi.string().required().lowercase(),
					areaFunction: Joi.string().required().lowercase(),
					user_id: Joi.string(),
				}),
			},
		}),
		occupationAreaController.save,
	)
}
