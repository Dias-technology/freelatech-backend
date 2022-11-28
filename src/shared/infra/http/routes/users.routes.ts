import { UserController } from '@/presentation/controllers'
import { celebrate, Joi } from 'celebrate'
import { Router } from 'express'

const userController = new UserController()

export default (router: Router): void => {
	router.post(
		'/user/save',
		celebrate({
			body: {
				name: Joi.string().min(3).required().lowercase(),
				email: Joi.string().email().required().lowercase(),
				password: Joi.string()
					.min(8)
					.regex(
						/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/,
					)
					.required(),
			},
		}),
		userController.save,
	)
}
