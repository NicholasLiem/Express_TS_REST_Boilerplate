import { type Request, type Response, Router } from 'express'
import { type UserController } from '../../../application/controllers/user.controller'
import { jwt_middleware } from '../middlewares/jwt_auth.middleware'
import { ErrorWrapper } from '../../../errors/error_wrapper.error'

export function userRoutes (controller: UserController): Router {
    const router = Router()

    router.get('/', jwt_middleware, ErrorWrapper(async (req: Request, res: Response) => await controller.getUser(req, res)))

    return router
}
