import { type Request, type Response, type NextFunction, type RequestHandler } from 'express'
import { CustomError } from './custom_error.error'
import { ResponseUtil } from '../utils/response.utils'

export const ErrorWrapper = (handler: RequestHandler) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await handler(req, res, next)
        } catch (error) {
            if (error instanceof CustomError) {
                return ResponseUtil.sendError(res, error.statusCode, error.message, null)
            }
            return ResponseUtil.sendError(res, 500, 'Internal server error', error)
        }
    }
