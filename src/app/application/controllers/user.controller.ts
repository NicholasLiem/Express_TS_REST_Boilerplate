import { type Request, type Response } from 'express'
import { type UserService } from '../services/user.service'
import { LoginSchema } from '../../schema/auth/login.schema'
import { RegisterSchema } from '../../schema/auth/register.schema'
import { CustomError } from '../../errors/custom_error.error'
import { sendResponse } from '../../utils/response.utils'

export class UserController {
    private readonly userService: UserService

    constructor (userService: UserService) {
        this.userService = userService
    }

    async getUser (req: Request, res: Response): Promise<Response> {
        const dataUser = {
            username: 'user',
            email: 'test@example.com'
        }
        return sendResponse(res, 200, 'Success fetch data', dataUser)
    }

    async login (req: Request, res: Response): Promise<Response> {
        const { identifier, password } = LoginSchema.parse(req.body)
        const token: string | null = await this.userService.authenticate(identifier, password)
        if (token == null) {
            throw new CustomError('Authentication failed', 404)
        }
        return sendResponse(res, 200, 'Login successful', { token })
    }

    async signup (req: Request, res: Response): Promise<Response> {
        const { username, name, email, password } = RegisterSchema.parse(req.body)
        const success = await this.userService.register(username, name, email, password)
        if (!(success ?? false)) {
            throw new CustomError('Registration failed', 500)
        }
        return sendResponse(res, 200, 'Registration successful', null)
    }
}
