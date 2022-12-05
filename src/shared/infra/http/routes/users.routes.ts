import { TypeUser } from '@/domain/entities'
import uploadConfig from '@/main/config/upload'
import { UserController } from '@/presentation/controllers'
import { celebrate, Joi } from 'celebrate'
import { cpf } from 'cpf-cnpj-validator'
import { Router } from 'express'
import multer from 'multer'

const userController = new UserController()
const upload = multer(uploadConfig)

export default (router: Router): void => {
	router.post(
		'/user/save',
		celebrate({
			body: {
				name: Joi.string().min(3).required().lowercase(),
				email: Joi.string().email().required().lowercase(),
				type: Joi.string()
					.required()
					.valid(...Object.values(TypeUser)),
				document: Joi.string()
					.required()
					.min(11)
					.custom((document) => {
						if (!cpf.isValid(document)) {
							throw new Error('document is invalid')
						}

						return document
					}),
				password: Joi.string()
					.min(8)
					.regex(
						/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
					)
					.required(),
			},
		}),
		userController.save,
	)

	router.patch(
		'/user/:id/avatar',
		upload.single('avatar'),
		userController.avatarUpload,
	)
}
