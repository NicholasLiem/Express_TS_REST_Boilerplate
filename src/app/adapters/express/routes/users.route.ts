import { type Request, type Response, Router } from 'express'
import { type UserController } from '../../../application/controllers/user.controller'
import { jwt_middleware } from '../middlewares/jwt_auth.middleware'

export function userRoutes (controller: UserController): Router {
    const router = Router()
    router.get('/', jwt_middleware, (req: Request, res: Response) => {
        controller.getUser(req, res).then(r => {})
    })
    return router
}
