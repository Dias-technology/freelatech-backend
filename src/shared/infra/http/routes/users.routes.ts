import uploadConfig from '@/config/upload'
import { CreateUserController } from '@/modules/accounts/useCases/CreateUser/CreateUserController'
import { UpdateUserAvatarController } from '@/modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'
import { Router } from 'express'
import multer from 'multer'

const userRoutes = Router()

const uploadAvatar = multer(uploadConfig)

const createUserController = new CreateUserController()
console.log('createUserController', createUserController)
const updateUserAvatarController = new UpdateUserAvatarController()

userRoutes.post('/', createUserController.handle)

// userRoutes.patch(
// 	"/avatar",
// 	uploadAvatar.single("avatar"),
// 	updateUserAvatarController.handle
// )

export { userRoutes }
