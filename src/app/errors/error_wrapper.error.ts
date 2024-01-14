import { type Request, type Response, type NextFunction } from 'express'
import { CustomError } from './custom_error.error'
import { sendError } from '../utils/response.utils'

export const ErrorWrapper = (handler: (req: Request, res: Response, next: NextFunction) => Promise<Response>) =>
    (req: Request, res: Response, next: NextFunction) => {
        handler(req, res, next).catch(error => {
            if (error instanceof CustomError) {
                sendError(res, error.statusCode, error.message, null)
            } else {
                sendError(res, 500, 'Internal server error', { errorMessage: error.message })
            }
        })
    }
