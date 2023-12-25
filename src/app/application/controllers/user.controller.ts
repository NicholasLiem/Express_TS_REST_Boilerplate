import { type Request, type Response } from 'express'
import { type UserService } from '../services/user.service'
import { ResponseUtil } from '../../utils/response.utils'
import { LoginSchema } from '../../schema/auth/login.schema'
import { RegisterSchema } from '../../schema/auth/register.schema'
import { CustomError } from '../../errors/custom_error.error'

export class UserController {
    private readonly userService: UserService

    constructor (userService: UserService) {
        this.userService = userService
    }

    async getUser (req: Request, res: Response) {
        const dataUser = {
            username: 'user',
            email: 'test@example.com'
        }
        return ResponseUtil.sendResponse(res, 200, 'Success fetch data', dataUser)
    }

    async login (req: Request, res: Response) {
        const { identifier, password } = LoginSchema.parse(req.body)
        const token: string | null = await this.userService.authenticate(identifier, password)
        if (!token) {
            throw new CustomError('Authentication failed', 404)
        }
        return ResponseUtil.sendResponse(res, 200, 'Login successful', { token })
    }

    async signup (req: Request, res: Response) {
        const { username, name, email, password } = RegisterSchema.parse(req.body)
        const success = await this.userService.register(username, name, email, password)
        if (!success) {
            throw new CustomError('Registration failed', 500)
        }
        return ResponseUtil.sendResponse(res, 200, 'Registration successful', null)
    }
}
