import uploadConfig from '@/config/upload'
import { CreateUserController } from '@/modules/accounts/useCases/CreateUser/CreateUserController'
import { UpdateUserAvatarController } from '@/modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'
import { Router } from 'express'
import multer from 'multer'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
const userRoutes = Router()

const uploadAvatar = multer(uploadConfig)

const createUserController = new CreateUserController()

const updateUserAvatarController = new UpdateUserAvatarController()

userRoutes.post('/', ensureAuthenticated, createUserController.handle)

userRoutes.patch(
	'/avatar',
	ensureAuthenticated,
	uploadAvatar.single('avatar'),
	updateUserAvatarController.handle,
)

export { userRoutes }
