import { Router } from 'express'
import { type UserController } from '../../../application/controllers/user.controller'
import { jwtMiddleware } from '../middlewares/jwt_auth.middleware'
import { ErrorWrapper } from '../../../errors/error_wrapper.error'

export function userRoutes (controller: UserController): Router {
    const router = Router()

    router.get('/', jwtMiddleware, ErrorWrapper(async (req, res) => await controller.getUser(req, res)))

    return router
}
