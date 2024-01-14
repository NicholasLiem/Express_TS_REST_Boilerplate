import { type Response } from 'express'

export function sendResponse<T>
(
    res: Response,
    status: number,
    message: string,
    data: T
): Response<T> {
    return res.status(status).json({
        success: true,
        message,
        data
    })
}

export function sendError<T> (
    res: Response,
    status: number,
    message: string,
    data: T
): Response<T> {
    return res.status(status).json({
        success: false,
        message,
        data
    })
}
