import { type Request, type Response, type NextFunction } from 'express'
import { type JwtClaims, verifyJWT } from '../../../utils/jwt.utils'
import { sendError } from '../../../utils/response.utils'

export function jwtMiddleware (req: Request, res: Response, next: NextFunction): Response | undefined {
    const token = req.header('Authorization')

    if ((token == null) || !token.startsWith('Bearer ')) {
        return sendError(res, 401, 'Unauthorized', null)
    }

    const tokenWithoutBearer = token.substring(7)

    try {
        const decoded = verifyJWT(tokenWithoutBearer)
        if (decoded.payload != null) {
            const payload = decoded.payload as JwtClaims
            req.username = payload.username
            req.name = payload.name
            console.log(decoded.payload)
            next()
        } else {
            return sendError(res, 401, 'Unauthorized', null)
        }
    } catch (error) {
        return sendError(res, 401, 'Unauthorized', null)
    }
}
