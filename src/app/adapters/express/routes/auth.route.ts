import { type Request, type Response, Router } from 'express'
import { type UserController } from '../../../application/controllers/user.controller'
import { ErrorWrapper } from '../../../errors/error_wrapper.error'

export function authRoutes (controller: UserController): Router {
    const router = Router()

    router.post('/login', ErrorWrapper(async (req: Request, res: Response) => await controller.login(req, res)))
    router.post('/register', ErrorWrapper(async (req: Request, res: Response) => await controller.signup(req, res)))

    return router
}
